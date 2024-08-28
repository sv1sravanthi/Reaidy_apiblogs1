const express=require('express');
const { createBlogs } = require('../controllers/blogController');
const router=express.Router();


router.get('/blogs');
router.post('/blogs',createBlogs)
// router.post('/blogs/comment/')
// router.get('/blogs/comment/:id')

module.exports = router;