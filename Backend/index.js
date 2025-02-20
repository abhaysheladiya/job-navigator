const express= require("express");
const mongoose = require('mongoose')
const userModel =require('./models/users.js')
const applicantModel =require('./models/applicant.js')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express();
app.use(express.json())
app.use(cors())


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

app.listen(5000, ()=>{
    console.log("app is running");
});