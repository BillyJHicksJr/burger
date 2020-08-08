var orm = require('../config/orm');
var burger = {
    all: function(cb){
        orm.selectall('burger', function(results){
            cb(results)
        })
    },
    create: function(){

    },
    update: function(){

    },
}
module.exports = burger