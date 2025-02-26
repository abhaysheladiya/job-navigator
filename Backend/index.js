const express= require("express");
const mongoose = require('mongoose')
const userModel =require('./models/users.js')
const applicantModel =require('./models/applicant.js')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const nodemailer= require('nodemailer')
const Job = require("./models/jobModel");

const multer =require("multer");
const path = require("path");
const { resolve } = require("path/posix");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});
const upload= multer({ storage });

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


mongoose.connect("mongodb://127.0.0.1:27017/jobNavigator");

app.post("/login",(req, res)=>{
    const {email, password} = req.body;
    userModel.findOne({ email: email })
    .then((user) => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) =>{
                if(err){ 
                    return res.json("the password is incorrect") 
                }
                if(response){
                    res.json("Success")
                }
            })
        }else{
            res.json("No record existed")
        }
    })
})


app.post('/register',(req,res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        userModel.create({name, email, password : hash})
        .then(users => res.json(job-navigator))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
    
})


app.post('/applyjob',(req,res) => {
    applicantModel.create(req.body)
    .then(users => res.json(job-navigator))
    .catch(err => res.json(err))
})

app.post("/upload", upload.single("resumeupload"), (req, res)=>{
    console.log(req. body);
    console.log(req.file);

    return res.redirect("/");
});



/* ---------------------- CREATE JOB APIs---------------------- */
app.post("/jobs", async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json({ message: "Job created successfully", job });
    } catch (error) {
        res.status(500).json({ message: "Error creating job", error });
    }
});

//GET ALL JOBS 
app.get("/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
});

// GET JOB BY ID
app.get("/jobs/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: "Job not found" });
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: "Error fetching job", error });
    }
});

//UPDATE JOB
app.put("/jobs/:id", async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) return res.status(404).json({ message: "Job not found" });
        res.status(200).json({ message: "Job updated successfully", job });
    } catch (error) {
        res.status(500).json({ message: "Error updating job", error });
    }
});

//DELETE JOB 
app.delete("/jobs/:id", async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) return res.status(404).json({ message: "Job not found" });
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting job", error });
    }
});


app.listen(5000, ()=>{
    console.log("app is running");
});




// forgot-password APIs
app.post('/forgot-password', (req, res)=>{
    const {email} = req.body;
    userModel.findOne({ email: email })
    .then(user => {
        if(!user){
            return res.send({Status: "User not existed"})
        }
        const token= jwt.sign({id: user._id}, "jwt_secret_key", {expiresIn: "1d"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'youremail@gmail.com',
              pass: 'yourpassword'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Reset your password',
            text: `http://localhost:5173/reset-password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status: "Success"})
            }
          });
          
    })
})

app.post('/reset-password/:id/:token',(req,res)=>{
    const {id, token} =req.params
    const {password} = req.body

    jwt.verify(token, "jwt_secret_key",(err, decoded)=>{
        if(err){
            return res.json({Status: "Error with token"})
        }else{
            bcrypt.hash(password, 10)
            .then(hash => {
                userModel.findByIdAndUpdate({_id: id}, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err=> res.send({Status: err}))
        }
    })
})