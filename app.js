
const models = require('./models')
const User = models.user;
const Group = models.group;

var express = require('express');
var app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/users', function(req, res) {
    User.findAll().then((users)=>{
        res.render('users',{"users":users});
    }).catch((err)=> res.render("error",{error:err}));
});


app.listen(8080);

module.exports.mainApp = app