var connection = require('./connection');
var orm = {
    selectall: function(table, cb){
        var query = 'SELECT * FROM ' + table + ';'
        connection.query(query, function(error, result){
            if(error){ 
                console.log(error)
                return
            }
            cb(result)
        })
    },
    insertOne: function(){

    },
    updateOne: function(){

    },
}
module.exports = orm