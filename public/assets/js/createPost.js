const titleInput = document.getElementById('title');
const ContentInput = document.getElementById('post-content');
const imageInput = document.getElementById('img');
const submit = document.getElementById('submit');
let title;
const validateInputs = (text) => {
  const pattern = /[a-zA-Z0-9\w\W]/;
  if (pattern.test(text)) {
    return true;
  }
  return false;
};
titleInput.addEventListener('input', () => {
  title = titleInput.value;
  if (title.length > 300 || !(validateInputs(title))) {
    titleInput.style.borderColor = 'red';
  } else {
    titleInput.style.borderColor = 'white';
  }
});

submit.addEventListener('click', () => {
  const content = ContentInput.value;
  const image = imageInput.value;
  if (title.length > 300) {
    console.log('So long title');
  } else if (!(validateInputs(title))) {
    console.log('please type something...');
  } else {
    const packet = {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        image,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    fetch('/post', packet).then((res) => res.json()).then((res) => {
      const { id } = res[0];
      window.location.href = `PostDetails.html?id=${id}`;
    });
  }
});
