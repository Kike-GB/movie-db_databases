var express = require('express');
var router = express.Router();
var moviesControllers = require('../controllers/moviesControllers')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DH Movies' });
});

router.get('/movies', moviesControllers.list);
  
router.get('/movies/new', moviesControllers.new);

router.post('/movies/create', moviesControllers.create);

router.get('/movies/:id', moviesControllers.detalle);

router.get('/movies/:id/edit', moviesControllers.edit);

router.patch('/movies/:id', function (req, res) {
  res.redirect('/movies')
})

router.delete('/movies/:id', function (req, res) {
  // devolver solo la pelicula especificada por el id
})

module.exports = router;
