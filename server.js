"use strict";

var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));


app.get('/rest/api/ping', function (req, res) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json({
        message: 'pong!'
    });
});

app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
