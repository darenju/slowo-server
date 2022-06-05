const word = (words) => (
  /**
   *
   * @param {Request} req The Express Request object
   * @param {Response} res The Express Response object
   * @returns
   */
  (req, res) => {
    const { word } = req.query;
    const found = words.find((w) => w.word === word);

    if (found) {
      res.json(found);
    } else {
      res.status(404).json({ error: 'The word you are looking for does not exist.' });
    }
  }
);

export default word;
