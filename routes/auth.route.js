const route = require('express').Router()
const upload = require('../utils/multerUpload')
const {inscription} = require('../controllers/auth.controller')


route.post('/inscription', upload.fields([
    { name: 'profile', maxCount:1 },
    { name: 'nationalPic', maxCount:1 } ]), 
    inscription)

module.exports = route