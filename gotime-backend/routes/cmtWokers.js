// Import thư viện
const express = require('express');
const User = require('../models/User');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// Endpoint: Lấy danh sách người giúp việc
app.get('/profile', (req, res) => {
    res.json(maid);
  });
  
  // Endpoint: Lấy danh sách đánh giá
  app.get('/reviews', (req, res) => {
    res.json(reviews);
  });
  
  // Endpoint: Thêm đánh giá mới
  app.post('/reviews', (req, res) => {
    const { maid, rating, comment } = req.body;
  
    if (!maid || !rating || !comment) {
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin!' });
    }
  
    const newReview = {
      id: reviews.length + 1,
      maid,
      rating,
      comment,
      date: new Date().toISOString(),
    };
  
    reviews.push(newReview);
    res.status(201).json({ message: 'Đánh giá đã được thêm!', review: newReview });
  });
  
  // Endpoint: Xóa một đánh giá (theo ID)
  app.delete('/reviews/:id', (req, res) => {
    const { id } = req.params;
    const reviewIndex = reviews.findIndex((review) => review.id === parseInt(id));
  
    if (reviewIndex === -1) {
      return res.status(404).json({ message: 'Không tìm thấy đánh giá!' });
    }
  
    reviews.splice(reviewIndex, 1);
    res.json({ message: 'Đánh giá đã được xóa!' });
  });
