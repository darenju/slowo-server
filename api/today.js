const today = (words) => (
  /**
   *
   * @param {Request} req The Express Request object
   * @param {Response} res The Express Response object
   * @returns
   */
  (req, res) => {
    const date = new Date();
    const random = (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % words.length;
    res.json({
      timestamp: random,
      data: words[random],
    });
  }
);

export default today;
