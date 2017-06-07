var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen' });
});

router.get('/api/datos', function(req,res,next){
  var datos = [
                {
  "numero de cuenta":"1709199300770",
  "nombre completo":"Dina Alejandra Paz Suazo",
  "colores":"pdinaalejandra@hotmail.com"
 
    }
              ];
  res.json(datos);

});

module.exports = router;
