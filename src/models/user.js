/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const SALT_WORK_FACTOR = 10;

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 8,
  },
});

schema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    this.password = hash;
    next();
  });
});

schema.pre('update', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    this.password = hash;
    next();
  });
});

schema.methods.comparePassword = function (candidatePassword) {
  const passwords = { candidatePassword, password: this.password };
  return new Promise((resolve, reject) => {
    bcrypt.compare(passwords, (err, success) => {
      if (err) return reject(err);
      return resolve(success);
    });
  });
};

const User = mongoose.model('User', schema);

export default User;
