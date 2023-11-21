const Movie = require("../Model/movieModel");

exports.createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);

  try {
    res.status(201).json({
      status: "success",

      data: {
        movie: movie,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    console.log(req.query);
    // const movie = await Movie.find()
    //   .where("duration")
    //   .equals(req.query.duration)
    //   .where('ratings')
    //   .equals(req.query.ratings)

    const movies = await Movie.find()
    console.log(movies);

    res.status(200).json({
      status: "success",
      length: movie.length,
      data: {
        movies: movies,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.getaMovie = async (req, res) => {
  // console.log(req.params.id);
  try {
    const movie = await Movie.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        movie: movie,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateAmovie = async (req, res) => {
  // console.log(req.params.id);
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      data: {
        movie: updatedMovie,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  // console.log(req.params.id);
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.movieStats=async(req,res)=>{


  try {
  
    const stats = await Movie.aggregate([
      {$match :{ratings:{$gte:4.5}}},
      {$group:{_id:'$releaseYear',
      avgRatings:{$avg:'$ratings'},
      avgPrice:{$avg:'$price'},
      minPrice:{$min:'$price'},
      maxPrice:{$max:'$price'},
      totalPrice:{$sum:'$price'}
    }}
    ])
    res.status(200).json({
      status: "success",
      count:stats.length,
      data: {
        stats
      }})
  } catch (error) {
    
    res.status(404).json({
      status:'fail',
      message:error.message
    })
  }

}

exports.getMovieGenre = async()=>{
  try {
    const genre = req.params.genre;

    res.stats(200).json({
      status:"success",
       data:{
        movies}
    })
    
  } catch (error) {
    res.stats(400).json({
      status:"fail",
      message:error.message
     
      
    })
    
  }
}