var mysql = require('mysql');
var connection; 

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:' ',
        database:'burgers_db',
});
};
connection.connect(function(error){
    if(error){ 
        console.log(error)
        return
    }
    console.log('everything checks out')
});
module.exports = connection