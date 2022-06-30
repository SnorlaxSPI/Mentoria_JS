// formato ecma6
import express from 'express';

import bodyParser from 'body-parser';
import { log } from './middlewares/log.js';
import { router } from './routes/routes.js';

const app = express();

// o app.use na verdade está injetando um middleware
app.use(bodyParser.json());
app.use(log);

app.use(router);

app.listen(3000);

export { app };