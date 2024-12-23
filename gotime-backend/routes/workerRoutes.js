// routes/workerRoutes.js
const express = require('express');
const Worker = require('../models/Worker');
const authenticate = require('../middleware/auth');

const router = express.Router();

// Tìm kiếm giúp việc
router.get('/workers', async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

// Thêm giúp việc mới
router.post('/workers', authenticate, async (req, res) => {
  const { username, skills, hourlyRate } = req.body;

  try {
    const newWorker = new Worker({ username, skills, hourlyRate });
    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
