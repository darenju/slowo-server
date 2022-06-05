import fs from 'fs';
import random from './api/random.js';
import today from './api/today.js';
import word from './api/word.js';
import search from './api/search.js';

/**
 *
 * @param {Express} app The Express app
 * @returns {Express}
 */
const createApi = (app) => {
  const words = JSON.parse(
    fs.readFileSync('./words.json').toString()
  );

  app.get('/random', random(words));
  app.get('/today', today(words));
  app.get('/word', word(words));
  app.get('/search', search(words));

  return app;
};

export default createApi;
