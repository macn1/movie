const mongoose = require('mongoose')



const fs = require('fs')

const Movie = require("../Model/movieModel");

const movies  = JSON.parse(fs.readFileSync('../data/movie.json','utf-8'))


  
  mongoose
  .connect('mongodb+srv://athulmk:athulmk@cluster0.lsgsqfu.mongodb.net/movie?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  })
  .then((conn) => {
    // console.log(conn);
    console.log(" db is connected");
  })
  .catch((err) => {
    console.log("error has occured");
  });


  const deleteMovies = async ( ) =>{

    try {
        await Movie.deleteMany()
        console.log("movie deleted successfully");

    } catch (error) {

        console.log("error occured"+error);


        
    }
    process.exit()

  }
  const importMovies = async ( ) =>{

    try {
        await Movie.create(movies)
        console.log("movie imported successfully");

    } catch (error) {

        console.log("error occured"+error);


        
    }
    process.exit()

  }
console.log(process.argv);
if (process.argv[2]=='--import') {

    importMovies()
    
}
if (process.argv[2]=='--delete') {

    deleteMovies()
    
}