import express from 'express';

import bodyParser from 'body-parser';
import { log } from './log/log.js';
import { router } from './routes/routes.js';

const app = express();

app.use(bodyParser.json());
app.use(log);

app.use(router);

app.listen(3000);

export { app };