var orm = require('../config/orm.js');
var burger = {
    all: function(cb){
        orm.selectall('burgers', function(results){
            cb(results)
        })
    },
    create: function(burg, cb){
        orm.insertOne('burgers', ['burger_name', 'devoured'], [burg, false], cb)
    },
    update: function (burgerId, cb) {
        orm.updateOne("burger", "devoured", burgerId, function (res) {
          cb(res);
        });

    },
}
module.exports = burger