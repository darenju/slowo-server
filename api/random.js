const random = (words) => (
  /**
   *
   * @param {Request} req The Express Request object
   * @param {Response} res The Express Response object
   * @returns
   */
  (req, res) => {
    const rand = Math.floor(Math.random() * (words.length + 1));
    res.json(words[rand]);
  }
);

export default random;
