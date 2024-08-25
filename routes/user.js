const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");
const { route } = require("./listing.js");


router.route("/signup")
    .get(userController.renderSignupForm) //renderSignUpForm
    .post(wrapAsync(userController.signup)) //Post signup route


router.route("/login")
    .get(userController.renderLoginForm)  //Login Route
    .post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login); //Login Post Route



//Logout get Route
router.get("/logout", userController.logout)

module.exports = router;