import { makeUrl } from '../utils.js';

const parseLi = (li, name) => {
  const formOfDefinition = li.querySelector('.form-of-definition');

  let ret = {};

  if (formOfDefinition) {
    const links = formOfDefinition.querySelectorAll('a[title^="Appendix:"]');
    const of = formOfDefinition.querySelector('.form-of-definition-link a');
    const { firstChild } = formOfDefinition;

    ret = {
      glossary: links.length ? links.map((link) => {
        return {
          text: link.textContent,
          url: makeUrl(link.attributes.href),
          conjoined: link.parentNode.classList.contains('inflection-of-conjoined') ? true : undefined,
        };
      }) : undefined,
      text: firstChild.nodeType === 3 ? firstChild.textContent.replace('of', '').trim() : undefined,
      of: of ? {
        text: of.textContent,
        url: makeUrl(of.attributes.href),
      } : undefined,
    };
  } else {
    const a = li.querySelector('a');

    if (a) {
      ret = {
        text: a.textContent,
      };
    }
  }

  const children = li.querySelectorAll('ol li');
  if (children.length) {
    ret.children = children.map((child) => parseLi(child, name));
  }

  return ret;
};

const parse = (section, name) => {
  const ret = {};

  const headword = section.querySelector('.headword').textContent;
  const li = section.querySelector('li');

  ret[headword] = parseLi(li, name);

  return ret;
};

export default parse;
