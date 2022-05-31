const express = require('express');
const bodyParser = require('body-parser');
const path = __dirname + '/app';
const app = express();
const words = require('./words.json');

app.use(express.static(path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path + '/index.html');
});

const apiRouter = express.Router();
const apiRoutes = ((app) => {
  app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * (words.length + 1));
    res.json(words[rand]);
  });

  return app;
})(apiRouter, {});
app.use('/api', apiRoutes);

app.listen(4000, () => {
  console.log('Ready.');
  console.log(`Found ${words.length} words in dictionnary.`);
});
