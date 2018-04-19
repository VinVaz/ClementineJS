'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/clementinejs');
	
    app.use('/controllers', express.static(process.cwd()+'/app/controllers'));
	app.use('/public', express.static(process.cwd()+'/public'));

    routes(app);

    app.listen(8080, function(){
	  console.log("Node.js listening on port 8080...");
    });

