const express = require('express')
const getEnquiryController = require('../controllers/enquiry.controller')

const router = express.Router()


router.post('/', getEnquiryController)


module.exports = router