import React from 'react';
import '../styles/CardUsed.css';
import { useNavigate } from 'react-router-dom';

const CardUsed = ({ post }) => { // Đảm bảo prop là 'post'
  const { id, title, content, provinces, districts, username, date } = post; // Chỉ lấy những trường cần thiết
  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển hướng

  const handleViewMore = () => {
    // Chuyển hướng đến trang chi tiết bài viết
    navigate(`/post/${id}`);
  };

  return (
 
    <div className="postcard__used">
      <h2 className="postcard__title">{title}</h2>
      <p className="postcard__content">{content}</p>
      <div className="postcard__infomation">
        <span>Người đăng: {username}</span>
        <span className="mx-2">|</span>
        <span>Ngày: {new Date(date).toLocaleDateString()}</span>
        <span className="mx-2">|</span>
        <span> {provinces}</span>
        <span className="mx-2">|</span>
        <span> {districts}</span>
      </div>
      <button
        onClick={handleViewMore}
      >
        Xem thêm
      </button>
    </div>
    
  );
};

export default CardUsed;
