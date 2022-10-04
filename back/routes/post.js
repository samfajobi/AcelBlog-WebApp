const express = require("express");
const router = express.Router();
const { createPost, updatePost, deletePost, getPost } = require('../controller/post');




router.post('/', createPost)
router.put('/:id', updatePost )
router.delete('/:id', deletePost)
router.get('/:id', getPost)


module.exports = router