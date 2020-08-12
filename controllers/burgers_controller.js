var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router()

router.get('/burgers', function(req, res){
    burger.selectAll(function(data){
        res.render('index', {
            burgerdata : data
        })
    })
})

router.post('/burger', function(req, res){
    burger.insertOne(req.body.patty, function(results){
        res.redirect('/burgers')
    })
})
router.put("/api/burger/:id", (req, res) => {
    var burgerId = req.params.id;
  
    burger.updateOne(burgerId, result => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router