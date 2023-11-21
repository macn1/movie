const express = require("express");
const Movie = require("../Model/movieModel");

const movieController = require("../Controller/movieController");

const router = express.Router();



router.route('/stats').get(movieController.movieStats)
router.route('/genre/:id').get(movieController.getMovieGenre)

router
  .route("/")
  .post(movieController.createMovie)
  .get(movieController.getMovie);


  router.route('/:id')
  .get(movieController.getaMovie)
  .patch(movieController.updateAmovie)
  .delete(movieController.deleteMovie)
module.exports = router;
