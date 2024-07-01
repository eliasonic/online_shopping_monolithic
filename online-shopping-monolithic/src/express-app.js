const express = require('express');
const cors  = require('cors');
const { customer, products, shopping } = require('./api');
const HandleErrors = require('./utils/error-handler');
const { databaseConnection } = require('./database');

const app = express()

app.use(express.json({ limit: '1mb'}));
app.use(express.urlencoded({ extended: true, limit: '1mb'}));
app.use(cors());
app.use(express.static(__dirname + '/public'))

databaseConnection()

app.get('/healthcheck', (req, res) => {
    return res.sendStatus(200)
}) 

//api
customer(app);
products(app);
shopping(app);

// error handling
app.use(HandleErrors);
    
module.exports = app