import words from '../words.json' assert {type: 'json'};

/**
 * @param {Request} req
 * @param {Response} res
 */
const random = (req, res) => {
  const rand = Math.floor(Math.random() * (words.length + 1));
  res.json(words[rand]);
};

export default random;
