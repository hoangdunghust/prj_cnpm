const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');

const authenticate = (req, res, next) => {
  // Lấy Authorization từ header
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  // Tách token từ header (giả định "Bearer <token>")
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. Invalid token format.' });
  }

  try {
    // Xác minh token bằng secretKey
    const verified = jwt.verify(token, secretKey);
    console.log('Verified User:', verified); // Debug payload
    req.user = verified; // Lưu thông tin người dùng vào request object
    next(); // Tiến hành xử lý các middleware tiếp theo
  } catch (error) {
    console.error('JWT Error:', error.message); // Debug error

    // Kiểm tra nếu token hết hạn
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token đã hết hạn.' });
    }

    // Nếu token không hợp lệ
    return res.status(401).json({ message: 'Token không hợp lệ hoặc bị sửa đổi.' });
  }
};

module.exports = authenticate;
