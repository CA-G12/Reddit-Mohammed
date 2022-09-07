const postId = window.location.href.split('=')[1];
fetch(`/post/${postId}`).then((res) => res.json()).then((res) => console.log(res));
fetch(`/comments/${postId}`).then((data) => data.json()).then((comments) => console.log(comments));
