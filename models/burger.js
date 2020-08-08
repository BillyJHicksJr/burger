var orm = require('../config/orm');
var burger = {
    all: function(cb){
        orm.selectall('burgers', function(results){
            cb(results)
        })
    },
    create: function(burg, cb){
        orm.insertOne('burgers', ['burger_name', 'devoured'], [burg, false], cb)
    },
    update: function(){

    },
}
module.exports = burger