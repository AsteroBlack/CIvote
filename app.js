const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const authRoute = require('./routes/auth.route')

const app = express()




//middleware 
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/images', express.static('upload/images'))
app.use('/auth', authRoute)



// app.use(async (req, res, next) => {
//     next(createError.NotFound("This routes doesn't exist !!"))
// })
// app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//         error: {
//             status: err.status || 500,
//             message: err.message,
//         }
//     })
// })


app.listen(process.env.PORT, () => {
    console.log('connected on port:', process.env.PORT)
})

