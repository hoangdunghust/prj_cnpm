import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Worker.css';

const workers = [
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
    console.log(id);
    const [worker, setWorker] = useState(null);  // State để lưu dữ liệu bài đăng
    const [loading, setLoading] = useState(true); // State để quản lý loading
  
useEffect(() => {
    if (!id) {
      console.error("ID không hợp lệ.");
      return;
    }
  
    fetch(`http://localhost:5000/api/workers/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('người dùng không tồn tại')
        }
        return response.json();
      })
      .then((data) => {
        setWorker(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi tải bài đăng:', error);
        setLoading(false);
      });
  }, [id]);
  ;
  if (loading) {
    return <p>Đang tải bài đăng...</p>;
  }

  if (!worker) {
    return (
      <p>
        Không tìm thấy nhân viên. <a href="/">Quay lại trang chủ</a>
      </p>
    );
  }
  
  return (
    <div className="worker-card">
      <img src={worker.image} alt={worker.name} className="worker-image" />
      <div className="worker-info">
        <h3 className="worker-name">{worker.name}</h3>
        <p className="worker-location">{worker.location}</p>
        <p className="worker-rating">Đánh giá: {worker.rating} ⭐</p>
        <p className="worker-phone">Điện thoại: {worker.phone}</p>
        <p className="worker-availability">Trạng thái: {worker.availability}</p>
        <p className="worker-hourly-rate">Giá: {worker.hourlyRate} VND/giờ</p>
        <p className="worker-age">Tuổi: {worker.age}</p>
        <p className="worker-gender">Giới tính: {worker.gender}</p>
        <p className="worker-skills">
          Kỹ năng: {worker.skills ? worker.skills.join(', ') : 'Không có'}
        </p>
        <p className="worker-certifications">
          Chứng chỉ: {worker.certifications ? worker.certifications.join(', ') : 'Không có'}
        </p>
        {worker.description && <p className="worker-description">Miêu tả: {worker.description}</p>}
        {worker.languages && (
          <p className="worker-languages">
            Ngôn ngữ: {worker.languages.join(', ')}
          </p>
        )}
        <p className="worker-experience">Kinh nghiệm: {worker.experience}</p>
        <div className="worker-reviews">
          <h4>Đánh giá:</h4>
          {worker.reviews && worker.reviews.length > 0 ? (
            <ul>
              {worker.reviews.map((review, index) => (
                <li key={index}>
                  <p>Người đánh giá: {review.reviewer}</p>
                  <p>Bình luận: {review.comment}</p>
                  <p>Đánh giá: {review.rating} ⭐</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Chưa có đánh giá.</p>
          )}
        </div>
        <div className="worker-actions">
          <button onClick={() => alert('Liên hệ với ' + worker.name)}>Liên hệ</button>
        </div>
      </div>
    </div>
  );
  
};

export default WorkerCard;
