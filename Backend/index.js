const express= require("express");
const mongoose = require('mongoose')
const userModel =require('./models/users.js')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/jobNavigator");

app.post('/login',(req,res)=>{
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user) {
           if(user.password === password ){
            res.json("Success")
           } else{
            res.json("the password is incorrect")
           }
        }else{
            res.json("No record existed")
        }
    })
})


app.post('/register',(req,res) => {
    userModel.create(req.body)
    .then(users => res.json(job-navigator))
    .catch(err => res.json(err))
})


app.listen(5000, ()=>{
    console.log("app is running");
});