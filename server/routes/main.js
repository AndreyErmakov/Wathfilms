const express = require('express')
const router  = express.Router()
const Films   = require('../models/films')
const request = require('request');
const db = require('./db')


router.get('', function(req,res){
  Films.find().limit(6).exec(function(err,r){

    if (err) throw res.send(err) 
    res.json(r)
  })
})

router.post('', function(req,res){
    Films.where('_id').gt(req.body.newFilmsUpdate).limit(6).exec(function(err,result) {
       if (err) throw res.send(err) 
      res.json(result)
      })
})
// var arr =[{"kinopoisk_id":"1129833","name":"\u0410\u0441\u0442\u0435\u0440\u0438\u043a\u0441 \u0438 \u0442\u0430\u0439\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435","name_eng":"","year":"2018","sub_type":"cartoons","url":"\/\/hdgo.club\/video\/Q298nQsLY481iJzUPrlwVnRh6EqC8Ctd\/24928\/"}]

// var str = JSON.stringify(arr)
// var p = JSON.parse(str)
// console.log(p);


 var counter = 0
// db.forEach(function(res){

//     if(res.kinopoisk_id != 0){
//       // counter++
//       if(counter > 600&& counte/r <= 700){
//         const url = 'http://hdgo.club/api/video.json'; 
//         var answer = '';

//         request({
//           method: 'GET',
//           url: url,
//           qs: {
//             kinopoisk_id: res.kinopoisk_id,
//           }
//           }, function (error, response, body) {
          
          
//           cd = JSON.parse(body)
          
//           //  console.log('cd',cd[0]);

          
//            var films = new Films(cd[0]);
//             films.save(function(err){
//                 if(err) return console.log(err);
//                 console.log('ок');
//             });
          
          
         



//         })
//       }
      
//     }
// })


// db.forEach(function(result,index){
//   counter++
//   if(counter <= 500){
//     var year = JSON.parse(result.year)
   
//     Films.update({kinopoisk_id:+result.kinopoisk_id},{$set:{year:result.year}}, function(err, result){
//       console.log(result);
      
//     })
//       console.log(result);
    
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





module.exports = router