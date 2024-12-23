import React from 'react';
import '../styles/Card.css';
import { useNavigate } from 'react-router-dom';
const Card = ({ worker }) => {
  const { id, name, image , rating, location, phone } = worker;
  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển hướng
  const handleViewMore = () => {
    // Chuyển hướng đến trang chi tiết worker (WorkerCard)
    navigate(`/worker/${id}`);
  };
  return (
    <div className="card">
    <div className="card__img">
    <img 
  src={image || 'https://via.placeholder.com/150'} 
  alt={name} 
  className="worker-image" 
/>

        </div>
    <h2 >{name}</h2>
    <p className='diachi'>{location}</p>
    <p >⭐ {rating}</p>
    <div className="social">
        <a href="">
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a title={phone} href="">
  <i className="fa-solid fa-phone"></i> 
</a>

     
    </div>
    <button onClick={handleViewMore}>Xem thêm</button>
</div>
  );
};

export default Card;

