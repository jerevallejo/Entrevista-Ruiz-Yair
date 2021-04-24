'use strict'

const express = require('express');

const app = express();

//routes files
let cardsRoutes = require('./routes/cards-routes');

//middlewares
2
3
// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//end point
app.use('/api',cardsRoutes);

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//export module

module.exports = app;
