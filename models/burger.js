var orm = require('../config/orm.js');
var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(results){
            cb(results)
        })
    },
    insertOne: function(burg, cb){
        orm.insertOne('burgers', ['burger_name', 'devoured'], [burg, false], cb)
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burger", "devoured", burgerId, function (res) {
          cb(res);
        });

    },
}
module.exports = burger