const express = require('express')
const router  = express.Router()
const Films   = require('../models/films')
const Serials   = require('../models/serials')



router.post('', function(req,res){
  if(req.body.categoria === 'serials'){
    Serials.find({kinopoisk_id:+req.body.movies}).exec(function(err,r) {
    res.json({serials:r})
    })
  }else{
  Films.find({kinopoisk_id:+req.body.movies}).exec(function(err,r) {
    res.json({newMovies:r})
    })
  }
  
})


module.exports = router


// const request = require('request');
// const db = require('./db')


// Films.find({kinopoisk_id:1075556}).exec(function(err,r) {
    
//     console.log(r);
    
//     })

