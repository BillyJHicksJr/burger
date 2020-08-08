var express = require('express')

var PORT = process.env.PORT || 8000
var app = express()

app.listen(PORT, function() {
    console.log('app listening on Port', PORT)
})
