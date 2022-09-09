// eslint-disable-next-line no-unused-vars
const createElement = (ele, text, classes) => {
  const element = document.createElement(ele);
  if (ele === 'img') {
    element.src = text;
  } else if (text) {
    element.textContent = text;
  }
  if (classes !== undefined) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }
  return element;
};
