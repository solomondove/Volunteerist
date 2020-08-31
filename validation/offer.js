const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAskInput(data) {
  let errors = {};

  data.category = validText(data.category) ? data.category : '';
  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Please enter a title';
  }

  if (!Validator.isLength(data.title, { min: 5 })) {
    errors.title = 'Title must be at least 5 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Please enter a description of your ask';
  }

  if (!Validator.isLength(data.description, { min: 25 })) {
    errors.description = 'Please describe your ask using at least 25 characters';
  }

  if (!Validator.isNumeric(data.timeCommitment, { no_symbols: false })) {
    errors.timeCommitment = 'Please enter a valid length of time';
  }

  if (!Validator.isAfter(data.deadline)) {
    errors.deadline = 'Please enter a deadline later than the current time';
  }

  if (!Validator.isNumeric(data.timeOfDay, { no_symbols: false })) {
    errors.timeOfDay = 'Please enter a valid length of time';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}