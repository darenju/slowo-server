const parse = (section) =>
  section.querySelectorAll('a').map((a) => a.textContent);

export default parse;
