const express = require('express');
const Booking = require('../models/Booking');
const authenticate = require('../middleware/auth');
const router = express.Router();

// Tạo một booking mới
router.post('/', authenticate, async (req, res) => {
  const { userId, workerId, date, timeSlot } = req.body;

  if (!userId || !workerId || !date || !timeSlot) {
    return res.status(400).json({ message: 'Missing required fields: userId, workerId, date, or timeSlot.' });
  }

  try {
    const newBooking = new Booking({
      userId,
      workerId,
      date,
      timeSlot,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking.' });
  }
});

// Lấy lịch đặt
router.get('/', authenticate, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

module.exports = router;
