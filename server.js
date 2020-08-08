var express = require('express')
var exphbs = require("express-handlebars");

var router = require('./controllers/burgers_controller')

var PORT = process.env.PORT || 8000
var app = express()

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log('app listening on Port', PORT)
})
