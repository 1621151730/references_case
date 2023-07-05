
const express = require("express");
const User = require("../controller/user")

const router = express.Router();

router.get('/search', User.search);

module.exports = router;