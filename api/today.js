import words from '../words.json' assert {type: 'json'};

/**
 * @param {Request} req
 * @param {Response} res
 */
const today = (req, res) => {
  const date = new Date();
  const random = (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % words.length;
  res.json({
    timestamp: random,
    data: words[random],
  });
};

export default today;
