const inputPost = document.getElementById('post-input');
const LoginSection = document.getElementById('Log&sign');
fetch('/checkUserAuth').then((res) => res.json()).then((res) => {
  if (res.massage) {
    inputPost.style.visibility = 'visible';
    LoginSection.style.visibility = 'hidden';
  } else {
    inputPost.style.visibility = 'hidden';
    LoginSection.style.visibility = 'visible';
  }
});
