const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const userSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
  },
  country: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
  },
  city: {
    type: String,
  },
  isActive: {
    type: Boolean,
    required: true
  },
  creation_date: {
    type: Date,
    required: true
  },

});

module.exports = mongoose.model('User', userSchema);