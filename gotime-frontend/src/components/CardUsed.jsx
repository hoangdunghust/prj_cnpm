import React from 'react';
import '../styles/CardUsed.css';
import { useNavigate } from 'react-router-dom';


const CardUsed = ({ post }) => { 
  // Sử dụng _id thay vì id từ MongoDB
  const {_id, title, content, province, district, name, createdAt } = post;
  const navigate = useNavigate() ; 
  const handleViewMore = () => {
    if (_id) {
      // Chuyển hướng đến trang chi tiết bài viết với _id hợp lệ
      navigate(`/post/${_id}`);
    } else {
      console.error('Không tìm thấy id của bài đăng');
    }
  };

  return (
    <div className="postcard__used">
      <h2 className="postcard__title">{title}</h2>
      <p className="postcard__content">{content}</p>
      <div className="postcard__infomation">
        <span>Người đăng: {name}</span>
        <span className="mx-2">|</span>
        <span>Ngày: {new Date(createdAt).toLocaleDateString()}</span>
        <span className="mx-2">|</span>
        <span> {province}</span>
        <span className="mx-2">|</span>
        <span> {district}</span>
      </div>
      <button onClick={handleViewMore}>
        Xem thêm
      </button>
    </div>
  );
};

export default CardUsed;
