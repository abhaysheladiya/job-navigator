const mongoose =require('mongoose')

const applicantSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    coverlatter: String,
    position: String
})

const applicantModel = mongoose.model("applicant", applicantSchema)
module.exports = applicantModel