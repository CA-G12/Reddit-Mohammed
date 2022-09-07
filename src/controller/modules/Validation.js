const joi = require('joi');

// SignUp
const signupValidation = (email, username, password, confirmPassword) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    username: joi.string().pattern(/^[a-zA-Z]{3,}\d?/).required().messages({
      'string.pattern.base': 'Username must contains only letters and digits and must starts with number',
    }),
    password: joi.string().pattern(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/).required().messages({
      'string.pattern.base': 'Password must be at least 6 characters from letters,digits and special characters',

    }),
    confirmPassword: joi.ref('password'),
  });
  return schema.validateAsync({
    email, username, password, confirmPassword,
  });
};

// Login
const loginValidation = (email, password) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return schema.validateAsync({ email, password });
};
module.exports = { signupValidation, loginValidation };
