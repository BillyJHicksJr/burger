var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'4321Apple$',
    database:'burgers_db',
});
connection.connect(function(error){
    if(error){ 
        console.log(error)
        return
    }
    console.log('everything checks out')
});
module.exports = connection