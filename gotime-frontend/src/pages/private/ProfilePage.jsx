import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { getUserInfo, updateUserInfo } from '../../api/userAPI'; // Import các API
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // Thay name thành username
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Bạn chưa đăng nhập');
      setLoading(false);
      return;
    }
  
    // Lấy thông tin người dùng từ API
    getUserInfo(token)
      .then((data) => {
        setUser(data);
        setEmail(data.email);
        setUsername(data.username); // Cập nhật username
        setLoading(false);
      })
      .catch((err) => {
        console.error(err); // In lỗi ra console để kiểm tra
        setError('Không thể tải thông tin hồ sơ');
        setLoading(false);
      });
  }, []);
  

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Bạn chưa đăng nhập');
      return;
    }

    try {
      // Gửi yêu cầu cập nhật thông tin người dùng
      const updatedUser = await updateUserInfo(token, { username, email }); // Gửi username thay vì name
      setUser(updatedUser); // Cập nhật lại state với thông tin người dùng mới
      setError('');
      alert('Cập nhật thành công!');
    } catch (err) {
      setError('Cập nhật thông tin thất bại');
    }
  };

  if (loading) {
    return <Typography>Đang tải...</Typography>;
  }

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
        Hồ Sơ Của Bạn
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {user && (
        <form>
          <TextField
            label="Tên Người Dùng"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            disabled
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Cập Nhật Thông Tin
          </Button>
        </form>
      )}
    </Box>
  );
};

export default ProfilePage;
