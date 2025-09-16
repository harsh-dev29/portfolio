
const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect('mongodb://localhost:27017/Portfolio-enquiry').then((req, res) => {
        console.log("DB connected successfully")
    }).catch(err => {
        console.log("error while connecting", err);

    })
}

module.exports = connectToDb