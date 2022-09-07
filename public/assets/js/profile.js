const id = window.location.href.split('=')[1];
if (id) {
  fetch(`/user/posts/${id}`).then((data) => data.json()).then((data) => console.log(data));
} else {
  fetch('/user/posts/').then((data) => data.json()).then((data) => console.log(data));
}
