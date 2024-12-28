import React from 'react';
import '../styles/Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ worker }) => {
  const { _id, name, image, rating, location, phone, description } = worker;
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/workers/${_id}`);
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
      <h2 className="card__name">{name}</h2>
      <p className="card__location">{location}</p>
      <p className="card__rating">⭐ {rating.toFixed(1)}</p>
      {description && <p className="card__description">{description.substring(0, 50)}...</p>}
      <div className="social">
        <a href={`tel:${phone}`} title={`Gọi ${name}`}>
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="#" title={`Liên hệ ${name}`}>
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <button onClick={handleViewMore} className="card__button">
        Xem thêm
      </button>
    </div>
  );
};

export default Card;
