const words = require('./words.json');

module.exports = function(app) {
  app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * (words.length + 1));
    res.json(words[rand]);
  });

  app.get('/today', (req, res) => {
    const date = new Date();
    const random = (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % words.length;
    res.json({
      timestamp: random,
      data: words[random],
    });
  });

  app.get('/word', (req, res) => {
    const { word } = req.query;
    const found = words.find((w) => w.word === word);
    res.json(found);
  });

  return app;
};
