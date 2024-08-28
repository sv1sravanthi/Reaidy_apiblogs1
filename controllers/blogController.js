

const mongoose = require('mongoose');
const Blog = require("../models/blogs");

const createBlogs=async(req,res)=>{
    try {
        
        const {title,content,author,category}=req.body
        const blog=await Blog.create({title,content,author,category})
        return res.status(201)
    } catch (error) {
        return res.status(500)
        console.log(error)
    }
}

module.exports = {createBlogs};