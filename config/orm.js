var connection = require('./connection');


function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }


var orm = {
    selectall: function(table, cb){
        var query = 'SELECT * FROM ' + table + ';'
        connection.query(query, function(error, result){
            if(error){ 
                console.log(error)
                return
            }
            cb(result)
        });
    },
    insertOne: function(table, columns, values, cb){
        var query = 'INSERT INTO ' + table + '(' + columns.toString() + ') ' + 'VALUES ' + '(' +  printQuestionMarks(values.length) + ');'
        connection.query(query, values, function(error, result){
            if(error){ 
                console.log(error)
                return
            }
            cb(result)
        });
    },
    updateOne: function(){

    },
}
module.exports = orm