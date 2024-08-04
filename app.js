const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const authRoute = require('./routes/auth.route')
require('./config/db')

const app = express()




//middleware 
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/images', express.static('upload/images'))
app.use('/auth', authRoute)


app.listen(process.env.PORT, () => {
    console.log('connected on port:', process.env.PORT)
})

