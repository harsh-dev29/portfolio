
const mongoose = require('mongoose')


const enquirySchema = new mongoose.Schema({
    email: String,
    phoneNumber: String,
    message: String
})

const enquiryModel = mongoose.model('enquiry', enquirySchema)


module.exports = enquiryModel