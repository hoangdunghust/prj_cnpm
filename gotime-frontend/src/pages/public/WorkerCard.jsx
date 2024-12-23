import React from 'react';
import { useParams } from 'react-router-dom';
import './Worker.css';

const workers = [
  {
    id: 1,
    name: 'Phạm Thị A',
    image: 'https://via.placeholder.com/150',
    rating: 4.9,
    location: 'Đà Nẵng',
    phone: '0901234567',
    email: 'phamthiA@example.com',
    available: true,
    price: 200000,
    experience: "Từng làm 50 công việc",
    description: 'Chuyên nghiệp, tỉ mỉ và luôn hoàn thành công việc đúng hạn.',
    languages: ['Tiếng Việt', 'Tiếng Anh'],
  },
  {
    id: 2,
    name: 'Phạm Thị B',
    image: 'https://via.placeholder.com/150',
    rating: 4.8,
    location: 'Hà Nội',
    phone: '0912345678',
    email: 'phamthiB@example.com',
    available: false,
    price: 250000,
    experience: "Từng làm 23 công việc",
    description: 'Làm việc cẩn thận, có nhiều kinh nghiệm trong lĩnh vực.',
    languages: ['Tiếng Việt', 'Tiếng Trung'],
  },
  {
    id: 3,
    name: 'Phạm Thị C',
    image: 'https://via.placeholder.com/150',
    rating: 4.7,
    location: 'TP. Hồ Chí Minh',
    phone: '0923456789',
    email: 'phamthiC@example.com',
    available: true,
    price: 300000,
    experience: "Từng làm 5 công việc",
    description: 'Thân thiện, luôn sẵn sàng hỗ trợ mọi lúc mọi nơi.',
    languages: ['Tiếng Việt', 'Tiếng Nhật'],
  },
];

const WorkerCard = () => {
  const { id } = useParams(); // Lấy id từ URL
  const worker = workers.find(worker => worker.id === parseInt(id, 10)); // Tìm worker theo id

  if (!worker) {
    return <p>Không tìm thấy thông tin người lao động.</p>;
  }

  return (
    <div className="worker-card">
      <img src={worker.image} alt={worker.name} className="worker-image" />
      <div className="worker-info">
        <h3 className="worker-name">{worker.name}</h3>
        <p className="worker-location">{worker.location}</p>
        <p className="worker-rating">Đánh giá: {worker.rating} ⭐</p>
        {worker.price && <p className="worker-price">Giá: {worker.price} VND/giờ</p>}
        <p className="worker-available">Trạng thái: {worker.available ? ( "Đang có sẵn") : ("Không có sẵn")} </p>
        
        {worker.description && <p className="worker-description">Miêu tả: {worker.description}</p>}
        {worker.languages && (
          <p className="worker-languages">
            Ngôn ngữ: {worker.languages.join(', ')}
          </p>
        )}
                <p className="worker-experience">{worker.experience}</p>
        <div className="worker-actions">
          <button onClick={() => alert('Liên hệ với ' + worker.name)}>Liên hệ</button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
