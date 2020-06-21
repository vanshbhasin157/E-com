var express = require('express')
var router = express.Router()
const {check} = require("express-validator");
const {signout, signup} = require("../controllers/auth.js");

router.post("/signup",[
    check("name", "name should be atleast 3 char").isLength({min:3}),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 6 char").isLength({min:6}),
], signup);
router.get("/signout", signout );

module.exports = router;