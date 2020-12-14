const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        // devolver todas las peliculas
        db.movies.findAll()
         .then(function(movies) {
          res.render('movies/index', { movies : movies });
       })
       .catch(error => {
         res.render('errors', {error: error});
        })
    },
    new: (req, res) => {
        // buscar la lista de todos los generos para visualizar en el formulario
        db.genres.findAll()
          .then(genre => {
            res.render('movies/create', { genres : genre })
          })
        .catch(error => {
          res.render('errors', {error: error});
        })
      },
      detalle: (req, res) => {
        // devolver solo la pelicula especificada por el id
        db.movies.findByPk(req.params.id)
        .then(movie => {
          res.render('movies/show', { movie : movie })
        })
        .catch(error => {
          res.render('errors', {error: error});
        })
      },
      create: (req,res) => {
          console.log('1', 'llegue')
        db.movies.create({
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          release_date: req.body.release_date,
          // ESTO ESTA MAL, DEBE GUARDAR EL ID DEL GENERO QUE SE QUIERE CARGAR
          genre_id: req.body.genre_id
        })
        .then(movie =>{ 
          res.redirect('/')
        })
        .catch(error => {
          res.render('errors', {error: error});
        })
      },
      edit: (req, res) => {
        res.render('movies/edit', {
          genres : [],
          movie : movie,
        })
      }
}
