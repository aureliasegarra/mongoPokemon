// Import HTTP package to create server
const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);

// Server creation
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);