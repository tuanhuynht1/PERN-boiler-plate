// use express web server
const express = require('express');
const app = express();

// import path and routers
const path = require('path');
const apiRouter = require('./api');

// set up environment variables in .env 
const dotenv = require('dotenv');
dotenv.config();

// middleware 
app.use(express.static(path.join(__dirname,'/client/build')));  // serve React client
app.use(express.json());    // parse request body as json
app.use('/api',apiRouter);     // use apiRouter with base route /api

// start up server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('PORT:', PORT));