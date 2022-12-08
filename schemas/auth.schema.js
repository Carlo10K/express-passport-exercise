const Joi = require('joi');

const email = Joi.string().email({ tlds: { allow: false } });
const token = Joi.string();
const newPassword = Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/);

const postEmail = Joi.object({
    email: email.required()
  });

  const postNewPass = Joi.object({
    token: token.required(),
    newPassword: newPassword.required()
  })

  module.exports = { postEmail, postNewPass };
