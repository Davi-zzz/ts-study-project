import app from '../src/app';
import * as http  from 'http';

import debug from 'debug';

debug('nodestr:server');
const server = http.createServer(app);
let port = app.get('port');
server.listen(port, () => {console.log('server is working on http://localhost:' + port+'/graphql'
)});
