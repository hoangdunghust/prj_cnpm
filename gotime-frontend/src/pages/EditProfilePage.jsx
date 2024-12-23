// src/pages/EditProfilePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const [user, setUser] = useState({ fullName: '', bio: '', profilePicture: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(response.data);
      } catch (err) {
        setError('Lỗi khi tải thông tin người dùng');
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/profile', user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate('/user/profile');
    } catch (err) {
      setError('Lỗi khi cập nhật thông tin');
    }
  };

  return (
    <div className="edit-profile-page">
      {error && <p>{error}</p>}
      <h2>Chỉnh sửa hồ sơ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Họ tên</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ảnh đại diện URL</label>
          <input
            type="text"
            name="profilePicture"
            value={user.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio</label>
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Lưu thay đổi</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
