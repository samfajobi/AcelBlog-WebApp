const express = require("express");
const router = express.Router();

const {
    register,
    login,
    forgotPassword,
    resetPassword} = require("../controller/auth")
   


// Routes

router.post("/register",  register)

router.post("/login",  login)

router.post("/forgotpass",  forgotPassword)  

router.put("/resetpass/:resetToken",  resetPassword)


  

module.exports = router;
