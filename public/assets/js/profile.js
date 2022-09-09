/* eslint-disable no-undef */
const id = window.location.href.split('=')[1];
const userInfoSection = document.getElementById('userInfo');
const userImageEle = document.getElementById('user-image');
const aboutEle = document.getElementById('about');
const userNameEle = document.getElementById('user-name');
const totalPostEle = document.getElementById('total-post');
const userPostsContainer = document.getElementById('userPosts');
// Handle Dom
const renderDom = (post, user, isAuth) => {
  const postContainer = createElement('div');
  const userImageForPost = createElement('img', user.image);
  const userNameEleForPost = createElement('p', user.username);
  const createdAtEle = createElement('p', post.curr_date);
  const postTitleEle = createElement('h3', post.title);
  const postContentEle = createElement('p', post.content);

  // Appending
  postContainer.append(
    userImageForPost,
    userNameEleForPost,
    createdAtEle,
    postTitleEle,
    postContentEle,
  );
  if (post.image !== null) {
    const postImage = createElement('img', post.image);
    postContainer.append(postImage);
  }
  if (isAuth) {
    const deletePostBtn = createElement('button', 'Delete');
    const UpdatePostBtn = createElement('button', 'Update');
    deletePostBtn.addEventListener('click', (e) => {
      userPostsContainer.removeChild(e.target.parentElement);

      fetch(`/post/delete/${post.id}`, { method: 'delete' }).then((res) => res.json()).then(() => {
        totalPostEle.textContent = (+totalPostEle.textContent) - 1;
      });
    });
    postContainer.append(deletePostBtn, UpdatePostBtn);
  }
  userPostsContainer.append(userImageEle, userNameEle, aboutEle, postContainer);
};
let bioBtn;
const getUserInfo = (data, aboutMassage, isAuth) => {
  if (data.posts.length === 0) {
    totalPostEle.textContent += 0;
  } else {
    totalPostEle.textContent += data.posts[0].number_of_posts;
  }
  userImageEle.src = data.user[0].image;
  userNameEle.textContent = data.user[0].username;
  if (isAuth) {
    bioBtn = createElement('button', 'Add Something');
    userInfoSection.append(bioBtn);
    bioBtn.addEventListener('click', () => {
      window.location.href = 'bio.html';
    });
  }
  if (data.user[0].about) {
    aboutEle.textContent = data.user[0].about;
    bioBtn.textContent = 'Edit Your Bio';
  } else {
    aboutEle.textContent = aboutMassage;
  }
};
const displayAllPosts = (data, user, isAuth) => {
  data.forEach((post) => {
    renderDom(post, user, isAuth);
  });
};
if (id) {
  // other users profile
  fetch(`/user/posts/${id}`).then((result) => result.json()).then((result) => {
    getUserInfo(result, 'No Information Provided From This User', false);
    if (result.posts.length === 0) {
      userPostsContainer.textContent = 'No Posts Available Yet';
    } else {
      displayAllPosts(result.posts, result.user[0], false);
    }
  });
} else {
  // authenticated user profile
  fetch('/user/posts/').then((result) => result.json()).then((result) => {
    getUserInfo(result, 'Write Something about yourself', true);
    if (result.posts.length === 0) {
      userPostsContainer.textContent = 'Share Us Your First Post';
      userPostsContainer.addEventListener('click', () => {
        window.location.href = 'CreatePost.html';
      });
    } else {
      displayAllPosts(result.posts, result.user[0], true);
    }
  });
}
