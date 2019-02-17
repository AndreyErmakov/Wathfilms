const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serialsShema = new Schema({
        title: {type: String, required:true},
        title_ru: {type:String},
        kinopoisk_id: {type:Number, required:true, unique: true},
        seasons_count:{type:String},
        episodes_count:{type:String},
        translator:{type:String},
        type:{type:String, required:true},
        quality: {type:String, required:true},
        iframe_url: {type:String, required:true},
        trailer: {type:String},
        year:{type:Number}
})

module.exports = mongoose.model('Serials', serialsShema)