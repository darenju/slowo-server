const words = require('./words.json');

module.exports = function(app) {
  app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * (words.length + 1));
    res.json(words[rand]);
  });

  return app;
};
