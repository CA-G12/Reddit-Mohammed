/* eslint-disable no-undef */
const inputPost = document.getElementById('post-input');
const LoginSection = document.getElementById('Log&sign');
const postsContainer = document.getElementById('posts');
const profilePage = document.getElementById('profile-page');
const authSection = document.getElementById('auth-section');
const searchInput = document.getElementById('search');
const containerSearchResult = document.getElementById('results');
fetch('/checkUserAuth').then((res) => res.json()).then((res) => {
  if (res.massage) {
    authSection.style.visibility = 'visible';
    LoginSection.style.visibility = 'hidden';
  } else {
    authSection.style.visibility = 'hidden';
    LoginSection.style.visibility = 'visible';
  }
});
const getPacket = (postId, voteValue) => {
  const packet = {
    method: 'POST',
    body: JSON.stringify({
      postId,
      voteValue,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  return packet;
};

const renderPosts = (object) => {
  const postId = object.post_id;
  const userId = object.user_id;
  const userInfoContainer = createElement('div');
  // User information
  const usernameEle = createElement('p', object.username);
  const userImgEle = createElement('img', object.userimage);
  userImgEle.addEventListener('click', () => {
    window.location.href = `./pages/profile.html?id=${userId}`;
  });
  const postContentEle = createElement('p', object.content);
  postContentEle.addEventListener('click', () => {
    window.location.href = `/pages/PostDetails.html?id=${postId}`;
  });

  const voteEle = createElement('p', object.total_votes);
  const addVoteEle = createElement('button', '+', ['add-vote']);
  const deleteVoteEle = createElement('button', '-', ['delete-vote']);
  // colors to vote element
  if (object.voted === 1) {
    addVoteEle.style.background = '#9c3c4f';
  } else if (object.voted === -1) {
    deleteVoteEle.style.background = 'blue';
  }
  // add vote
  addVoteEle.addEventListener('click', () => {
    addVoteEle.style.background = '#9c3c4f';
    deleteVoteEle.style.background = 'white';

    fetch('/vote/add', getPacket(postId, '1')).then((data) => data.json()).then((data) => {
      if (data === 0 || data === 1) {
        voteEle.textContent = (+voteEle.textContent) + 1;
      } else {
        voteEle.textContent = (+voteEle.textContent) + 0;
      }
    });
  });
  // delete vote
  deleteVoteEle.addEventListener('click', () => {
    deleteVoteEle.style.background = 'blue';
    addVoteEle.style.background = 'white';

    fetch('/vote/add', getPacket(postId, '-1')).then((data) => data.json()).then((data) => {
      if (data === 0 || data === -1) {
        voteEle.textContent = (+voteEle.textContent) - 1;
      } else {
        voteEle.textContent = (+voteEle.textContent) + 0;
      }
    });
  });
  userInfoContainer.append(
    usernameEle,
    userImgEle,
    postContentEle,
    addVoteEle,
    voteEle,
    deleteVoteEle,
  );
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

const renderSearchDom = (result) => {
  const option = document.createElement('p');

  if (result.users) {
    option.id = result.userId;
    option.textContent = result.users;
    option.addEventListener('click', (e) => {
      const { id } = e.target;
      window.location.href = `./pages/profile.html?id=${id}`;
    });
  } else {
    option.id = result.postId;
    option.textContent = result.posts;
    option.addEventListener('click', (e) => {
      const { id } = e.target;
      window.location.href = `/pages/PostDetails.html?id=${id}`;
    });
  }
  containerSearchResult.append(option);
};
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value;
  if (searchValue.trim().length > 0) {
    fetch(`/search/${searchValue}`).then((data) => data.json()).then((data) => {
      const results = data.map((i) => {
        if (i.username.includes(searchValue)) {
          return {
            users: i.username,
            userId: i.user_id,
          };
        }
        return {
          posts: i.title,
          postId: i.post_id,
        };
      });
      containerSearchResult.textContent = '';
      results.forEach((element) => {
        renderSearchDom(element);
      });
    });
  }
});
