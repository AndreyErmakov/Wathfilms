const express = require('express')
const router  = express.Router()
const Films   = require('../models/films')
const Serials   = require('../models/serials')



router.post('', function(req,res){
  console.log('categoria',req.body);
  
  let skip =  req.body.upDate - 1
  
  if(req.body.categoria === 'serials'){
    Serials.find().skip(skip * 24).limit(24).exec(function(err,r) {
    res.json(r)
    })
  } 
  else if (req.body.categoria === 'newMovies'){
  Films.find({year:2019}).skip(skip * 24).limit(24).exec(function(err,r) {
    res.json(r)
    })
  }
  else if (req.body.categoria === 'films'){
  Films.find().skip(skip * 24).limit(24).exec(function(err,r) {
    res.json(r)
    })
    
  }
  
})


module.exports = router

