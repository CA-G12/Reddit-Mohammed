/* eslint-disable no-undef */
const inputPost = document.getElementById('post-input');
const LoginSection = document.getElementById('Log&sign');
const postsContainer = document.getElementById('posts');
const profilePage = document.getElementById('profile-page');
fetch('/checkUserAuth').then((res) => res.json()).then((res) => {
  if (res.massage) {
    inputPost.style.visibility = 'visible';
    profilePage.style.visibility = 'visible';
    LoginSection.style.visibility = 'hidden';
  } else {
    inputPost.style.visibility = 'hidden';
    profilePage.style.visibility = 'hidden';
    LoginSection.style.visibility = 'visible';
  }
});

const renderPosts = (object) => {
  const userInfoContainer = createElement('div');
  // User information
  const usernameEle = createElement('p', object.username);
  const userImgEle = createElement('img', object.userimage);
  userImgEle.addEventListener('click', () => {
    const id = object.user_id;
    window.location.href = `./pages/profile.html?id=${id}`;
  });
  const postContentEle = createElement('p', object.content);
  postContentEle.addEventListener('click', () => {
    const id = object.post_id;
    window.location.href = `/pages/PostDetails.html?id=${id}`;
  });
  // Appending
  userInfoContainer.append(usernameEle, userImgEle, postContentEle);
  postsContainer.append(userInfoContainer);
};
// Get all posts
fetch('/posts').then((data) => data.json()).then((posts) => {
  posts.forEach((object) => {
    renderPosts(object);
  });
});
inputPost.addEventListener('focus', () => {
  window.location.href = 'pages/CreatePost.html';
});
profilePage.addEventListener('click', () => {
  window.location.href = './pages/profile.html';
});
