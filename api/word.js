import { parse } from 'node-html-parser';
import words from '../words.json' assert {type: 'json'};

/**
 * @param {Request} req
 * @param {Response} res
 */
const word = (req, res) => {
  const { word } = req.query;
  const found = words.find((w) => w.word === word);

  if (found) {
    res.json(found);
  } else {
    res.status(404).json({ error: 'The word you are looking for does not exist.' });
  }
};

export default word;
