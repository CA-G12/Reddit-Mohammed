const titleInput = document.getElementById('title');
const ContentInput = document.getElementById('post-content');
const imageInput = document.getElementById('img');
const submit = document.getElementById('submit');
const errors = document.getElementById('errors');
let title;

const validateInputs = (text) => {
  const pattern = /[a-zA-Z0-9\w\W]/;
  if (pattern.test(text)) {
    return true;
  }
  return false;
};
// Title Validation
titleInput.addEventListener('input', () => {
  title = titleInput.value;
  if (title.length > 300 || !(validateInputs(title))) {
    titleInput.style.borderColor = 'red';
  } else {
    titleInput.style.borderColor = 'white';
  }
});

const getPacket = (method) => {
  title = titleInput.value;
  const content = ContentInput.value;
  if (title.length > 300) {
    errors.textContent = 'So long title';
    errors.style.display = 'block';
  } else if (!(validateInputs(title))) {
    errors.textContent = 'please type something...';
    errors.style.display = 'block';
  } else {
    const formData = new FormData();

    if (imageInput.files.length !== 0) {
      formData.append('file', imageInput.files[0]);
    }
    formData.append('title', title);
    formData.append('content', content);
    const packet = {
      method,
      body: formData,
    };
    return packet;
  }
};

const urlId = window.location.href.split('=')[1];
submit.addEventListener('click', () => {
  if (urlId) {
    fetch(`/post/${urlId}`, getPacket('PUT')).then((res) => res.json()).then(() => {
      window.location.href = 'profile.html';
    });
  } else {
    fetch('/post', getPacket('POST')).then((res) => res.json()).then((res) => {
      const { id } = res[0];
      window.location.href = `PostDetails.html?id=${id}`;
    });
  }
});

// Display data That Want Update IT
if (urlId) {
  fetch(`/post/${urlId}`).then((data) => data.json()).then((data) => {
    titleInput.value = data.title;
    ContentInput.value = data.content;
    submit.textContent = 'Update';
  });
}
