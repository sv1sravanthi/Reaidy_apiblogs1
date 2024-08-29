// const express=require('express');
// const { createBlogs } = require('../controllers/blogController');
// const router=express.Router();


// router.get('/blogs');
// router.post('/blogs',createBlogs)
// // router.post('/blogs/comment/')
// // router.get('/blogs/comment/:id')

// module.exports = router;



const express = require('express');
const {
    createBlog,
    getBlogs,
    createComment,
    getCommentsByBlogId,
} = require('../controllers/blogController');

const router = express.Router();

router.get('/blogs', getBlogs); // Fetch all blogs
router.post('/blogs', createBlog); // Create a new blog
router.post('/blogs/comment', createComment); // Create a new comment
router.get('/blogs/comment/:id', getCommentsByBlogId); // Get comments for a blog

module.exports = router;