

// const mongoose = require('mongoose');
// const Blog = require("../models/blogs");

// const createBlogs=async(req,res)=>{
//     try {
        
//         const {title,content,author,category}=req.body
//         console.log("hello")
//         const blog=await Blog.create({title,content,author,category})
//          res.status(201).send("success")
//     } catch (error) {
//         console.log(error)
//     }
// }
// module.exports={createBlogs}



const Blog = require('../models/blogs');
const Comment = require('../models/comments');

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const { title, content, author, category } = req.body;
        const blog = await Blog.create({ title, content, author, category });
        res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a comment for a blog
const createComment = async (req, res) => {
    try {
        const { comment, name, blogID } = req.body;
        const blog = await Blog.findById(blogID);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const newComment = await Comment.create({ comment, name, blogID });
        res.status(201).json({ message: 'Comment added successfully', newComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get comments for a particular blog
const getCommentsByBlogId = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await Comment.find({ blogID: id }).sort({ createdAt: -1 });

        if (!comments.length) {
            return res.status(404).json({ message: 'No comments found for this blog' });
        }

        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    createComment,
    getCommentsByBlogId,
};