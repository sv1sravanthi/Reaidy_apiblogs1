
const express=require('express')
const router=express.Router();


router.get('/blogs');
router.post('/blogs')
router.post('/blogs/comment/')
router.get('/blogs/comment/:id')

module.exports = router