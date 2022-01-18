'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const app = require('../js-study/app');

const server = http.createServer(app);
let port = app.get('port');
server.listen(port, () => {console.log('server is working on http://localhost:' + port)});

