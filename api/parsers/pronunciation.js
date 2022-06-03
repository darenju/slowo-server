import { makeUrl } from '../utils.js';

const parse = (section) => {
  const ret = {};

  // Pronunciation
  const ipa = section.querySelector('.IPA');

  if (ipa) {
    ret.ipa = ipa.text;
  }

  // Audio
  const audio = section.querySelector('source[src]');

  if (audio) {
    ret.audio = 'https:' + audio.attributes.src;
  }

  // Rhymes
  const rhymesLink = section.querySelector('[title^="Rhymes:"]');

  if (rhymesLink) {
    const isNew = rhymesLink.classList.contains('new');

    ret.rhymes = {
      text: rhymesLink.text,
      url: !isNew ? makeUrl(rhymesLink.attributes.href) : undefined,
    };
  }

  // Syllabification
  const syllabification = section.querySelector('.Latn[lang="pl"]');

  if (syllabification) {
    ret.syllabification = syllabification.text;
  }

  return ret;
};

export default parse;
