const express = require('express')

const app = express()

const morgan = require('morgan')


const movieRouter = require('./Routes/MovieRouter')

app.use(express.json())
app.use(morgan('dev'))



app.use("/movies",movieRouter)


module.exports = app