const parse = (section) => {
  return section.querySelectorAll('li').map((li) => ({
    text: li.textContent,
    url: li.querySelector('a').attributes.href,
  }));
};

export default parse;
