const express = require('express');
const router = express.Router();

// Endpoint để trả về các bài đăng
router.get('/', (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is the first post' },
    { id: 2, title: 'Post 2', content: 'This is the second post' },
    { id: 3, title: 'Post 3', content: 'This is the third post' },
  ];
  res.status(200).json(posts);
});

module.exports = router;
