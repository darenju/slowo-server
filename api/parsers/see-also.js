import { makeUrl } from '../utils.js';

const parse = (section) => {
  return section.querySelectorAll('ul li a').map((link) => ({
    text: link.textContent,
    url: makeUrl(link.attributes.href),
  }));
};

export default parse;
