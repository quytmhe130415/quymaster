var express = require('express')
var server = express();
var fs = require('fs');
var path = require('path');
let amount = 10;
var data = require('./data');



server.get('/api/v1/:page', function(req, res, next) {
    var page = parseInt(req.params.page) - 1;
    page = page < 0 ? 0 : page;
    var start = page * amount;
    var end = start + amount;
    res.json({
        status: 'Success',
        data: data.slice(start, end)
    });
})

server.get('/home', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'template.html'))
})


server.listen(process.env.PORT || 3000, () => {
    console.log('Dang lang nghe 3000!' + this.address().port);
})