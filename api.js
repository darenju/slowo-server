const words = require('./words.json');

module.exports = function(app) {
  app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * (words.length + 1));
    res.json(words[rand]);
  });

  app.get('/today', (req, res) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const timestamp = startOfDay / 1000;
    const index = timestamp % words.length;
    res.json(words[index]);
  });

  return app;
};
