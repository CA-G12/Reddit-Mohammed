const submitBtn = document.getElementById('submit');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const inputError = document.getElementById('InputError');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const packet = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch('/login', packet).then((res) => res.json()).then((data) => {
    if (data.path) {
      window.location.href = data.path;
    } else {
      inputError.style.visibility = 'visible';
      inputError.textContent = data.message;
    }
  });
});
emailInput.addEventListener('input', () => {
  inputError.style.visibility = 'hidden';
});
passwordInput.addEventListener('input', () => {
  inputError.style.visibility = 'hidden';
});
