// eslint-disable-next-line no-unused-vars
const createElement = (ele, value, classes, hasImage) => {
  const element = document.createElement(ele);
  if (ele === 'img') {
    // Get Uploaded Image,Else Get Default Image
    console.log(`./images/${value}`);
    if (hasImage) { element.src = `./images/${value}`; } else element.src = value;
  } else if (value) {
    element.textContent = value;
  }
  if (classes !== undefined && classes !== '') {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }
  return element;
};
