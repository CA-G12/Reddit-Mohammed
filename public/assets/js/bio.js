const bio = document.getElementById('bio');
const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', () => {
  if (bio.value.trim().length > 0) {
    const bioValue = bio.value;
    const packet = {
      method: 'put',
      body: JSON.stringify({
        bioValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    fetch('/user/bio', packet).then(() => { window.location.href = 'profile.html'; });
  }
});
fetch('/user/bio').then((res) => res.json()).then((data) => {
  bio.value = data.user[0].about;
});
