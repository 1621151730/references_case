/*
 * @Author: wangwendie
 * @Date: 2023-07-04 13:45:04
 * @LastEditors: wangwendie
 * @Description:
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  user_name: String,
  password: String,
  city: String,
  create_time: String,
  avatar: { type: String, default: 'default.jpg' }
})

userSchema.index({ id: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;