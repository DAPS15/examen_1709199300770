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



router.get('/calculo', function(req,res,next){
  res.render('calculo',{"suma":"","resultado":""});
});
var calculosR = [];

router.post('/calculo',function(req,res,next){
  console.log(req.body);
    calculosR.push(req.body.txtnum1,req.body.txtnum2,req.body.result);
    var msgs = calculosR;
    var rtObject = {};
    var rtObject2 = {};
    var result = {};
    
    rtObject.txtnum1 = req.body.txtnum1;
    rtObject2.txtnum2 = req.body.txtnum2;

    result.msg= msgs;

});

module.exports = router;
