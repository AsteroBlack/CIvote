const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

//middleware 
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.use(async (req, res, next) => {
    next(createError.NotFound("This routes doesn't exist !!"))
})
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
})


app.listen(process.env.PORT, () => {
    log('connected on port:', process.env.PORT)
})

