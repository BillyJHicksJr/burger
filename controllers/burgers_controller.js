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

module.exports = router
