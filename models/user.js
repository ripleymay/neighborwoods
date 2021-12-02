const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {
    type: String, 
    required: true,
    minLength: 2
  },
  isAdmin: {
    type: Boolean, 
    required: true, 
    default: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\.\w+/,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String, 
    required: true,
    match: /[1-9]\d{2}-\d{3}-\d{4}/
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 3
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);