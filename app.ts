import * as express from 'express';
import route from './src/routes/routes';

const app = express();
const port = 3080;

app.set('port', port);
app.use('/', route);

export default app;

