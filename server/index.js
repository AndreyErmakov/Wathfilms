const express = require('express')
const mongoose = require('mongoose')
const main = require('./routes/main')


const app = express()
mongoose.connect('mongodb://Andrey:A8286894@ds163984.mlab.com:63984/films', { useNewUrlParser: true })

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use('/api/main', main)


const PORT = process.env.PORT || 3030

app.listen(PORT, function(){
  console.log('Server run')
})
