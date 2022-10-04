const express = require("express");
const router = express.Router();
const  { updateUser, deleteUser, getUser }  = require("../controller/user");


router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)



module.exports = router

       