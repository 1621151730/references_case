/*
 * @Author: wangwendie
 * @Date: 2023-07-04 13:44:45
 * @LastEditors: wangwendie
 * @Description:
 */
const UserModel = require("../models/user.js")

class User {

  constructor() {

  }

  async search (req, res, next) {
    const { user_name } = req.query;
    console.log("user_name", user_name);
    try {
      const user = await UserModel.findOne({}, "-_id -__v");
      res.send(user)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new User();