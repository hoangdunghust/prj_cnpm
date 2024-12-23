import React, { useState } from 'react';

const ReviewPage = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đánh giá:', review, 'Số sao:', rating);
    alert('Cảm ơn bạn đã đánh giá!');
  };

  return (
    <div className="review-page p-4">
      <h1 className="text-2xl font-semibold mb-4">Đánh giá dịch vụ</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Số sao:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-2 border rounded mb-4"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} sao
            </option>
          ))}
        </select>
        <label className="block mb-2">Đánh giá của bạn:</label>
        <textarea
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Hãy viết đánh giá tại đây..."
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Gửi đánh giá
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;

