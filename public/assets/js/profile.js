/* eslint-disable no-undef */
const id = window.location.href.split('=')[1];
const userInfoSection = document.getElementById('userInfo');
const userImageEle = document.getElementById('user-image');
const aboutEle = document.getElementById('about');
const userNameEle = document.getElementById('user-name');
const totalPostEle = document.getElementById('total-post');
const userPostsContainer = document.getElementById('userPosts');
const uploadBtn = document.getElementById('uploadBtn');
const uploadImgInput = document.getElementById('uploadImgInput');

// Handle Dom
const renderDom = (post, user, isAuth) => {
  const postContainer = createElement('div', '', ['post-div']);
  const userImageForPost = createElement('img', user.image, ['user-image'], false);
  const userNameEleForPost = createElement('p', user.username, ['username-post']);
  const createdAtEle = createElement('p', post.to_char, ['date']);
  const postTitleEle = createElement('h4', post.title);
  const postContentEle = createElement('p', post.content, ['content']);
  const divUser = createElement('div', '', ['user-post-div']);
  divUser.append(userImageForPost, userNameEleForPost);
  // Appending
  postContainer.append(
    divUser,
    createdAtEle,
    postTitleEle,
    postContentEle,
  );
  if (post.image !== null) {
    const postImage = createElement('img', post.image, ['post-image']);
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
    UpdatePostBtn.addEventListener('click', () => {
      const { id } = post;
      window.location.href = `CreatePost.html?id=${id}`;
    });
    postContainer.append(deletePostBtn, UpdatePostBtn);
  }
  userPostsContainer.append(postContainer);
};
let bioBtn;
const getUserInfo = (data, aboutMassage, isAuth) => {
  if (data.posts.length === 0) {
    totalPostEle.textContent += 0;
  } else {
    totalPostEle.textContent += data.posts[0].number_of_posts;
  }

  if (data.user[0].has_image) { // Get Uploaded Image
    userImageEle.src = data.user[0].image;
  } else { // Get Default Image
    userImageEle.src = data.user[0].image;
  }

  userNameEle.textContent = data.user[0].username;
  if (isAuth) {
    // Edit bio button for auth user
    bioBtn = createElement('button', 'Add Something');
    userInfoSection.append(bioBtn);
    if (data.user[0].about) {
      bioBtn.textContent = 'Edit Your Bio';
    }
    bioBtn.addEventListener('click', () => {
      window.location.href = 'bio.html';
    });
  }
  if (data.user[0].about) {
    aboutEle.textContent = data.user[0].about;
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
  uploadBtn.style.display = 'none';
  uploadImgInput.style.display = 'none';
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
uploadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append('file', uploadImgInput.files[0]);
  const packet = {
    method: 'POST',
    body: formData,
  };
  fetch('/user/upload', packet).then((res) => res.json()).then((data) => {
    userImageEle.src = data.path;
  });
});
