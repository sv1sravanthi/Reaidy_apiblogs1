const { default: mongoose } = require("mongoose")

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
        trim: true,
      },
      name: {
        type: String,
        required: true,
      },
      blogID: {
    
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
        required: true,
      },
},{
    timestamps: true, 
  })
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;