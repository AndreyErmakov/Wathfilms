const express = require('express')
const mongoose = require('mongoose')

const main = require('./routes/mian')

const app = express()

app.use('/api/main', main)

const PORT = process.env.PORT || 3030

app.listen(PORT, function(){
  console.log('Server run')
})
