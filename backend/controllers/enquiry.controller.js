const enquiryModel = require('../model/enquiry.model')


async function getEnquiryController(req, res) {
    const { email, phoneNumber, message } = req.body
    console.log(email, phoneNumber, message);


    res.status(200).json({
        message: "data recieved sucessfully",
        email, phoneNumber, message
    })

    const enquiry = await enquiryModel.create({
        email,
        phoneNumber,
        message
    })

}


module.exports = getEnquiryController