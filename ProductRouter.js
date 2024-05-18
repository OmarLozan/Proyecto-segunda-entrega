const express = require('express');
//let router = espress.router();
//let productControl = require('..controller/productController');
const router = express.Router();
const productControl = require('../controller/productcontroller');


//el metodo router nos permite definir una ruta
router.route('/productos').get(function(req,res)  {
    res.render('loging');
}).post(productControl.create);
//ruta para la vista form
router.route('/home').get(function(req,res) {
    res.render('index');
}); 


module.exports = router;