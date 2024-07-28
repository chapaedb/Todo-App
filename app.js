const exp = require('constants');
const express = require('express');
const todorouter = require('./routes/todo')
const connectMongodb = require('./Init/mongodb')
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');



dotenv.config()

// init app
const app = express()
app.use(bodyparser.urlencoded({ extended: true })); // Correct the typo
app.use(bodyparser.json());
// establish connection with mongodb Atlas
connectMongodb();
app.use('/', todorouter);
// view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extende: true}));

module.exports = app;