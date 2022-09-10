const validateInputs = (pattern, text) => {
  if (pattern.test(text)) {
    return true;
  }
  return false;
};

const checkUserData = (pattern, text, path, packet, userError) => {
  if (validateInputs(pattern, text)) {
    fetch(path, packet)
      .then((res) => res.json())
      .then((data) => {
        if (data.massage) {
          userError.style.display = 'block';
        } else {
          userError.style.display = 'none';
        }
      });
  }
};
module.exports = validateInputs;
