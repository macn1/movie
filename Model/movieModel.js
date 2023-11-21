const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is a required a field'],
        unique:true ,  //oru name ulla oru movie mathram mathi
        trim:true  // if there is any whitespaces before n aftr movie name it will replace automticly
        },
        description:{
            type:String,
            required:[true,'discription is a required a field'],
            trim:true  // if there is any whitespaces before n aftr movie name it will replace automticly
            },
        duration:{
            type:Number,
            required:[true,'duration is required field']
        },
        ratings:{
            type:Number,
            default:1
        },
         totalRatings:{
            type:Number
        },
         releaseYear:{
            type:Number,
            required:[true,'release is required field']


        },
        releaseDate:{
            type:Date
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        genres:{
            type:[String],
            required:[true,'genres is required field']
        },
        directors:{
            type:[String],
            required:[true,'directors is required field']
        },
        coverImage:{
            type:String,
            required:[true,'cover image is required field']

        },
        actors:{
            type:[String],
            required:[true,'actors is required field']
        
        },
        price:{
            type:[Number],
            required:[true,"price is required field"]
        }




}) 

const Movie = mongoose.model("Movie",movieSchema)

module.exports = Movie