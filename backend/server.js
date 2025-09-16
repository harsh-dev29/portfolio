const express = require('express');
const connectToDb = require('./db/db');
const enquiryRoute = require('./routes/enquiry.route')
const cors = require('cors')

const app = express()
connectToDb()
app.use(express.json())
app.use(cors())
app.listen(3000, () => {
    console.log("port is running on localhost:3000");

})
app.use('/enquiry', enquiryRoute)

module.exports = app