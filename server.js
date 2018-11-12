const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// api routes
const api = require('./server/routes/api');

const app = express();

// parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist/letter-shack-app')));

// set api routes
app.use('/api', api);

// catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/letter-shack-app/index.html'));
});

/* get port from env and store in express */
const port = process.env.PORT || '8000';
app.set('port', port);

/* create HTTP server */
const server = http.createServer(app);

/* listen on provided port */
server.listen(port, () => console.log(`API running on localhost:${port}`));
