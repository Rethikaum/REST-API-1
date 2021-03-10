const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://rethika:rethikamongo07@cluster0.joyel.mongodb.net/Example?retryWrites=true&w=majority'
const PORT = process.env.PORT || 7000;

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const Router = require('./routes/route1')
app.use('/users', Router)

app.listen(PORT, () => {
    console.log('Server Started')
})