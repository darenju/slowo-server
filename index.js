const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const appPath = path.join(__dirname, '../app');

const app = express();

app.use(express.static(appPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(appPath + '/index.html');
});

const apiRouter = express.Router();
app.use('/api', require('./api')(apiRouter));

app.listen(4000, () => {
  console.log('Ready.');
});
