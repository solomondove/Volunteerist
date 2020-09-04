const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEditInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : '';
  data.lastName = validText(data.lastName) ? data.lastName : '';
  data.email = validText(data.email) ? data.email : '';

  // if (Validator.isEmpty(data.firstName)) {
  //   errors.firstName = 'First name is required';
  // }

  // if (Validator.isEmpty(data.lastName)) {
  //   errors.lastName = 'Last name is required';
  // }

  // if (!Validator.isEmail(data.email)) {
  //   errors.email = 'Email is invalid';
  // }

  // if (Validator.isEmpty(data.email)) {
  //   errors.email = 'Email field is required';
  // }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};