var express = require('express');
var burger = require('../models/burger');
var router = express.Router()

router.get('/burgers', function(req, res){
    burger.all(function(data){
        res.render('index', {
            burgerdata : data
        })
    })
})

router.post('/burger', function(req, res){
    burger.create(req.body.patty, function(results){
        res.redirect('/burgers')
    })
})


module.exports = router