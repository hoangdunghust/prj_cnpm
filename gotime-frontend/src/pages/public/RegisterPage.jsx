import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { registerUser } from '../../api/authAPI'; // Tạo hàm API đăng ký
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState(''); // Thêm state cho username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    try {
      const credentials = { username, email, password }; // Gửi thêm username
      await registerUser(credentials); // Gọi API đăng ký
      setSuccess(true);
      setError('');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Đăng ký thất bại');
    }
  };

  const handleRedirectToLogin = () => {
    navigate('/login'); // Chuyển hướng đến trang đăng nhập
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '50px auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Đăng Ký
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Trường nhập username */}
        <TextField
          label="Tên người dùng"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Mật khẩu"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Xác nhận mật khẩu"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
          required
        />
        {error && (
          <Alert severity="error" sx={{ marginY: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginY: 2 }}>
            Đăng ký thành công! Bạn có thể đăng nhập.
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Đăng Ký
        </Button>
      </form>

      {/* Nút Chuyển đến trang đăng nhập */}
      <Button
        variant="text"
        color="secondary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={handleRedirectToLogin}
      >
        Đã có tài khoản? Đăng Nhập
      </Button>
    </Box>
  );
};

export default RegisterPage;
