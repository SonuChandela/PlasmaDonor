const mongoose = require('mongoose');
const Validators = require('validator');

const userSchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: [false, 'Please Enter Your User Type'],
  },
  name: {
    type: String,
    required: [false, 'Please Enter Your Name'],
  },
  bloodgroup: {
    type: String,
    required: [false, 'Please Enter Your Blood Group'],
  },
  email: {
    type: String,
    required: [false, 'Please Enter Your Email'],
    unique: false,
    validate: [Validators.isEmail, 'Please Enter Valid Email'],
  },
  mobile: {
    type: String,
    required: [false, 'Please Enter Your Mobile'],
    unique: false,
    max: 10,
  },
  age: {
    type: String,
    required: [false, 'Please Enter Your Age'],
  },
  report: {
    type: Date,
    required: [false, 'Please Enter Your Positive Report Date'],
  },
  area: {
    type: String,
    required: [false, 'Please Enter Your Area'],
  },
  pincode: {
    type: String,
    required: [false, 'Please Enter Your Pincode'],
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model('User', userSchema);
