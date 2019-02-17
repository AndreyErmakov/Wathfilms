const express = require('express')
const mongoose = require('mongoose')
const main = require('./routes/main')
const movies = require('./routes/movies')
const categoria = require('./routes/categoria')
const app = express()



mongoose.connect('mongodb://Andrey:A8286894@ds163984.mlab.com:63984/films', { useNewUrlParser:true })

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use('/api/main', main)
app.use('/api/movies', movies)
app.use('/api/categoria', categoria)
app.use('/img', express.static('img'));

const PORT = process.env.PORT || 3030

app.listen(PORT, function(){
  console.log('Server run')
}) 


// IMG DOWNLOAD
// const db   = require('./routes/dbserial')

// const download = require('image-downloader') 

// var count = 0

// db.forEach((e)=>{


// if(count <=500 && e.kinopoisk_id != 0 ){
//   console.log(e.kinopoisk_id);
//   count++

//   const path = __dirname + `/img/iphone360_${e.kinopoisk_id}.jpg`




// const fs = require('fs')
// fs.unlink(path, (err) => {
//   if (err) throw err;
//   console.log('path/file.txt was deleted'); 
// });

// const url =  `https://st.kp.yandex.net/images/film_iphone/iphone360_${e.kinopoisk_id}.jpg` 
// const options = {
//         url: url,
//         dest: path
//       }


//       download.image(options)
//         .then(({ filename, image }) => {
//           console.log('File saved to', filename)
//           console.log(count);
          
//         })
//         .catch((err) => {
//           console.error('err',err)
//         })


// }

// }) 





