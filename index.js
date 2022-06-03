import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import createApi from './api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appPath = path.join(__dirname, '../app');

const app = express();

app.set('json spaces', 2);

app.use(express.static(appPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(appPath + '/index.html');
});

const apiRouter = express.Router();
app.use('/api', createApi(apiRouter));

app.listen(4000, () => {
  console.log('Ready.');
});
