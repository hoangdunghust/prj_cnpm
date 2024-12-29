import React from 'react';
import styles from '../../styles/ProfilePage.css';

const WorkerProfile = ({ worker, reviews }) => {
  return (
    <div className={styles.profilePage}>
      {/* Thông tin cơ bản */}
      <div className={styles.basicInfo}>
        <img src={worker.image} alt={worker.name} className={styles.profileImage} />
        <h1>{worker.name}</h1>
        <p><strong>Location:</strong> {worker.location}</p>
        <p><strong>Phone:</strong> {worker.phone}</p>
        <p><strong>Skills:</strong> {worker.skills}</p>
        <p><strong>Experience:</strong> {worker.experience}</p>
        <p><strong>Languages:</strong> {worker.languages}</p>
        <p><strong>Certifications:</strong> {worker.certifications}</p>
        <p><strong>Age:</strong> {worker.age}</p>
        <p><strong>Gender:</strong> {worker.gender}</p>
        <p><strong>Hourly Rate:</strong> ${worker.hourlyRate}/hour</p>
        <p className={styles.description}>{worker.description}</p>
      </div>

      {/* Phần đánh giá */}
      <div className={styles.reviewsSection}>
        <h2>Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <span className={styles.stars}>{'⭐'.repeat(review.rating)}</span>
                <span className={styles.rating}>({review.rating}/5)</span>
              </div>
              <p className={styles.comment}>{review.comment}</p>
              <p className={styles.reviewer}><strong>- {review.reviewer}</strong></p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default WorkerProfile;

// Ví dụ về worker và reviews được truyền vào
// const worker = {
//   name: 'John Doe',
//   image: 'https://via.placeholder.com/150',
//   location: 'New York, USA',
//   phone: '123-456-7890',
//   skills: 'Plumbing, Electrical',
//   experience: '5 years',
//   languages: 'English, Spanish',
//   certifications: 'Licensed Electrician',
//   age: 35,
//   gender: 'Male',
//   hourlyRate: 25,
//   description: 'Experienced handyman providing quality work.'
// };

// const reviews = [
//   { rating: 5, comment: 'Excellent work, very professional!', reviewer: 'Alice' },
//   { rating: 4, comment: 'Good job, but could improve punctuality.', reviewer: 'Bob' },
//   { rating: 5, comment: 'Highly recommended!', reviewer: 'Charlie' }
// ];
