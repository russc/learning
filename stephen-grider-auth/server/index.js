const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); //middleware parses incoming requests into JSON
const morgan = require('morgan'); //middleware logging framework
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB Setup
mongoose.connect('mongodb://dixon:dixon@ds163301.mlab.com:63301/dixon');

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
