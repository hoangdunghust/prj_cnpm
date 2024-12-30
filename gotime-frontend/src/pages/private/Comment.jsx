import React, { useState } from 'react';
import './MaidReview.css'; // Thêm CSS để style nếu cần

const MaidReview = () => {
  const [reviews, setReviews] = useState([]);
  const [currentMaid, setCurrentMaid] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const maids = [
    { id: 1, name: 'Nguyen Thi A' },
    { id: 2, name: 'Tran Van B' },
    { id: 3, name: 'Le Thi C' },
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!currentMaid || !comment) return;

    const newReview = {
      maid: currentMaid,
      rating: rating,
      comment: comment,
    };

    setReviews([...reviews, newReview]);
    setRating(5);
    setComment('');
  };

  return (
    <div className="maid-review-container">
      <h1>Đánh Giá Người Giúp Việc</h1>

      <section className="maid-list">
        <h2>Danh sách người giúp việc</h2>
        <ul>
          {maids.map((maid) => (
            <li key={maid.id}>{maid.name}</li>
          ))}
        </ul>
      </section>

      <section className="review-form">
        <h2>Để lại đánh giá</h2>
        <form onSubmit={handleReviewSubmit}>
          <label>
            Chọn người giúp việc:
            <select
              value={currentMaid}
              onChange={(e) => setCurrentMaid(e.target.value)}
            >
              <option value="">-- Chọn --</option>
              {maids.map((maid) => (
                <option key={maid.id} value={maid.name}>
                  {maid.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Đánh giá:
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <label>
            Bình luận:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Nhập bình luận của bạn"
            ></textarea>
          </label>
          <button type="submit">Gửi</button>
        </form>
      </section>

      <section className="review-list">
        <h2>Đánh giá từ người dùng</h2>
        {reviews.length === 0 ? (
          <p>Chưa có đánh giá nào.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.maid}</strong> - {review.rating} sao
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default MaidReview;
