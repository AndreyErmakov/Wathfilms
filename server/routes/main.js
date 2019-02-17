const express = require('express')
const router  = express.Router()
const Films   = require('../models/films')
const Serials   = require('../models/serials')



router.get('', function(req,res){
  Promise.all([
        Films.find({year:2019}).limit(6).exec(),
        Films.find().limit(6).exec(),
        Serials.find().limit(6).exec()
      ]).then(function(result) {
        var arr = {}
        arr.newMovies = result[0]
        arr.films    = result[1]
        arr.serials    = result[2]
        res.json(arr)
      }).catch();
})

router.post('/newMovies', function(req,res){
  Films.find({year:2019}).where('_id').gt(req.body.newFilmsUpdate).limit(6).exec(function(err,r) {
    if(r.length < 6){
      const quan = 6 - r.length
        Films.find({year:2019}).limit(quan).exec(function(err, result){
        result.forEach(function(res){
          r.push(res)
        })
          res.json({newMovies:r})
        
        })
    }else{
      if (err) throw res.send(err) 
    res.json({newMovies:r})
    }
    })
})
router.post('/films', function(req,res){
  Films.find().where('_id').gt(req.body.newFilmsUpdate).limit(6).exec(function(err,r) {
    if(r.length < 6){
      const quan = 6 - r.length
        Films.find().limit(quan).exec(function(err, result){
        result.forEach(function(res){
          r.push(res)
        })
          res.json({films:r})
        
        })
    }else{
      if (err) throw res.send(err) 
    res.json({films:r})
    }
    })
})


router.post('/serials', function(req,res){
  Serials.find().where('_id').gt(req.body.serialsUpdate).limit(6).exec(function(err,r) {
    if(r.length < 6){
      const quan = 6 - r.length
        Serials.find().limit(quan).exec(function(err, result){
        result.forEach(function(res){
          r.push(res)
        })
          res.json({serials:r})
        
        })
    }else{
      if (err) throw res.send(err) 
    res.json({serials:r})
    }
    })
})



module.exports = router


// const request = require('request');
// const db = require('./dbserial')

//  var counter = 0
// db.forEach(function(res){

//     if(res.kinopoisk_id != 0){
//       counter++
//       if(counter > 200&& counter <= 500){
//         const url = 'http://hdgo.club/api/video.json'; 
//         request({
//           method: 'GET',
//           url: url,
//           qs: {
//             kinopoisk_id: res.kinopoisk_id,
//           }
//           }, function (error, response, body) {
          
          
//           cd = JSON.parse(body)
          
//             // console.log('cd',cd[0]);

          
//            var serials = new Serials(cd[0]);
//             serials.save(function(err){
//                 if(err) return console.log(err);
//                 console.log('ок');
//             });
          
          
         



//         })
//       }
      
//     }
// })

//addYear in db 

// var counter = 0
// db.forEach(function(result,index){
//    if(result.kinopoisk_id != 0){

//   counter++
//   if(counter <= 500){
//     var year = JSON.parse(result.year)
   
//     Serials.update({kinopoisk_id:+result.kinopoisk_id},{$set:{year:result.year}}, function(err, result){
//       console.log(result);
      
//     })
//       console.log(result);
    
//   }
//   }
// })


/*
Product.updateOne(
    {_id: id},
    {sort:sort,
     $set:{ 
          name:name, 
          price:price,  
          description:description,
          otherDetalis:otherDetalis,
     }},
  
  function(err, result){
    if(err) return console.log(err)
    console.log(result)
  })
*/



