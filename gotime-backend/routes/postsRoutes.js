const express = require('express');
const router = express.Router();
const Post = require("../models/Post")
let postIdCounter = 4; // ID bắt đầu cho bài đăng mới




// Lấy danh sách bài đăng
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Lấy tất cả bài đăng từ MongoDB
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error });
  }
});

// Lấy bài đăng theo ID
router.get('/:id', async (req, res) => {
  try {
    const postId = mongoose.Types.ObjectId(req.params.id);  // Chuyển đổi ID sang ObjectId
    const post = await Post.findById(postId);  // Tìm bài đăng bằng ObjectId

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);  // Trả về bài đăng tìm thấy
  } catch (error) {
    console.error('Lỗi:', error);  // Log lỗi để dễ dàng theo dõi
    res.status(500).json({ message: 'Error retrieving post', error });
  }
});


// Tạo bài đăng mới
router.post('/', async (req, res) => {
  try {
    // Kiểm tra xem tất cả các trường bắt buộc có trong yêu cầu không
    const { salary, content, title, tel } = req.body;

    if (!salary || !content || !title || !tel) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newPost = new Post(req.body);
    await newPost.save(); // Lưu bài đăng vào MongoDB
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);  // Log lỗi để dễ dàng theo dõi
    res.status(400).json({ message: 'Error creating post', error });
  }
});


module.exports = router;
