// src/api/authAPI.js
import axios from 'axios';

// Cấu hình URL cơ bản cho API
const apiUrl = 'http://localhost:5000/api'; // Đảm bảo URL của backend đúng

// Hàm đăng nhập
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, credentials);
    return response.data;  // Trả về { token: '...' }
  } catch (error) {
    if (error.response) {
      console.error('Lỗi từ backend:', error.response.data);
    } else {
      console.error('Lỗi không xác định:', error.message);
    }
    throw error;
  }
};

// Hàm đăng ký
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    return response.data;  // Trả về thông tin đăng ký thành công
  } catch (error) {
    if (error.response) {
      console.error('Lỗi từ backend:', error.response.data);
    } else {
      console.error('Lỗi không xác định:', error.message);
    }
    throw error;
  }
};
