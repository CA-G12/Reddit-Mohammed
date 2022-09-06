const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPassInput = document.getElementById('confirmPassword');
const submit = document.getElementById('submit');
const emailError = document.getElementById('emailError');
const usernameError = document.getElementById('usernameError');
const inputError = document.getElementById('inputError');

// My Patterns
const usernamePattern = /^[a-zA-Z]{3,}\d?/;
const passwordPattern = /^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/;
const emailPattern = /^[a-zA-Z0-9]{6,30}@gmail.com|@hotmail.com$/;

// when submit the form
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const password = passwordInput.value;
  const confirmPassword = confirmPassInput.value;
  const email = emailInput.value;
  const username = usernameInput.value;
  if (!validateInputs(emailPattern, email)) {
    inputError.style.display = 'block';
    inputError.textContent = 'Please Type a valid email';
  } else if (emailError.style.display === 'block') {
    inputError.style.display = 'block';
    inputError.textContent = 'Please check Your email again';
  } else if (!validateInputs(usernamePattern, username)) {
    inputError.style.display = 'block';
    inputError.textContent = 'Username must contains three letters at least and digits';
  } else if (usernameError.style.display === 'block') {
    inputError.style.display = 'block';
    inputError.textContent = 'Someone has same your username, please choose anther one';
  } else if (!validateInputs(passwordPattern, password)) {
    inputError.style.display = 'block';
    inputError.textContent = 'Password must be at least 6 characters from letters,digits and special characters';
  } else if (password !== confirmPassword) {
    inputError.style.display = 'block';
    inputError.textContent = 'Passwords do not match';
  } else {
    const packet = {
      method: 'POST',
      body: JSON.stringify({
        email,
        username,
        password,
        confirmPassword,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    fetch('/signup', packet).then((res) => res.json()).then((res) => {
      if (res.path) {
        window.location.href = res.path;
      } else {
        inputError.style.visibility = 'visible';
        inputError.textContent = res.message;
      }
    });
  }
});

usernameInput.addEventListener('input', () => {
  inputError.style.display = 'none';
  usernameError.style.display = 'none';
  const username = usernameInput.value;
  const usernamePacket = {
    method: 'POST',
    body: JSON.stringify({
      username,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  checkUserData(usernamePattern, username, '/username', usernamePacket, usernameError);
});
emailInput.addEventListener('input', () => {
  inputError.style.display = 'none';
  emailError.style.display = 'none';
  const email = emailInput.value;
  const emailPacket = {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  checkUserData(emailPattern, email, '/email', emailPacket, emailError);
});
passwordInput.addEventListener('input', () => {
  inputError.style.display = 'none';
});
confirmPassInput.addEventListener('input', () => {
  inputError.style.display = 'none';
});
