const express = require('express');
const app = express();
const Sequelize = require ('sequelize');
const connect = require('./models/index');
const ProdRoutes = require('/')

app.set("View engine", 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: tru }));
app.use('/public',express.static('PUBLIC'));
app.get('/',function(req,res){
   /*res.send('index.html'); 
    root:__dirname*/
   res.render('loging');
});
app.listen(3000);

