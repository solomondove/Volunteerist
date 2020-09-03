const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAskInput(data) {
  let errors = {};

  data.category = validText(data.category) ? data.category : '';
  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  data.location.lat = validText(data.location.lat.toString()) ? data.location.lat.toString() : '';
  data.location.lng = validText(data.location.lng.toString()) ? data.location.lng.toString() : '';
  data.address = validText(data.address) ? data.address : "";
  let location = `${data.location.lat}, ${data.location.lng}`;

  



  if (Validator.isEmpty(data.title)) {
    errors.title = 'Please enter a title';
  }

  if (!Validator.isLength(data.title, { min: 5 })) {
    errors.title = 'Title must be at least 5 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Please enter a description of your ask';
  }

  if (!Validator.isLatLong(location)) {
    errors.location = 'Please enter a valid address';
  }

  if (!Validator.isLength(data.description, { min: 25 })) {
    errors.description = 'Please describe your ask using at least 25 characters';
  }

  if (Validator.isEmpty(data.address)) {
    errors.description = "Please enter a valid address";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}