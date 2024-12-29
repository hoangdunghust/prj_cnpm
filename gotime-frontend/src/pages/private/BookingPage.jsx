import React, { useState } from 'react';
import styles from '../../styles/BookingPage.css';

const BookingPage = ({ userId, workerId }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAccepting, setIsAccepting] = useState(false);

  const handleAcceptJob = async () => {
    setIsAccepting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Bạn cần đăng nhập để nhận việc.');
      }

      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId, // ID người dùng
          workerId, // ID người giúp việc
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Lỗi khi nhận việc.');
      }

      const data = await response.json();
      setSuccessMessage('Bạn đã nhận việc thành công! Người dùng sẽ được thông báo.');
    } catch (error) {
      console.error("Error accepting job:", error);
      setErrorMessage(error.message || 'Không thể nhận việc. Thử lại sau.');
    } finally {
      setIsAccepting(false);
    }
  };

  return (
    <div className={styles.bookingPage}>
      <h1>Nhận việc từ người dùng</h1>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <button
        onClick={handleAcceptJob}
        className={styles.submitButton}
        disabled={isAccepting}
      >
        {isAccepting ? 'Đang xử lý...' : 'Đồng ý nhận việc'}
      </button>
    </div>
  );
};

export default BookingPage;
