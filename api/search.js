import removeAccents from 'remove-accents';

const clean = (str) =>
  removeAccents(str.toLowerCase());

const search = (words) => (
  /**
   *
   * @param {Request} req The Express Request object
   * @param {Response} res The Express Response object
   * @returns
   */
  (req, res) => {
    const { query, sections } = req.query;

    if (query.length < 2) {
      return res.status(400).json({ error: 'Query length is not sufficient.'});
    }

    const search = clean(query);
    const splitSections = sections ? sections.split(',') : [];
    const searchSection = (sections) =>
      sections.some(({ name }) => splitSections.indexOf(name) !== -1);

    const results = words.filter((word) => {
      const matchesQuery = clean(word.word).indexOf(search) !== -1;
      const matchesSections = splitSections.length ? searchSection(word.sections || []) : true;
      return matchesQuery && matchesSections;
    });

    res.json({
      count: results.length,
      results,
    });
  }
);

export default search;
