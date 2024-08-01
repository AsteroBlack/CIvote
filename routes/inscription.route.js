const route = require('express').Router
const inscriptionController = require('../controllers/inscrption.controller')

route.post('/inscription', inscriptionController)

module.exports = route