import express from 'express';
import words from './words.json' assert {type: 'json'};
import random from './api/random.js';
import today from './api/today.js';
import word from './api/word.js';

/**
 *
 * @param {Express} app The Express app
 * @returns {Express}
 */
const createApi = (app) => {
  app.get('/random', random);
  app.get('/today', today);
  app.get('/word', word);

  return app;
};

export default createApi;
