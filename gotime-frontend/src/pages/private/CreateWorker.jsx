import React, { useState } from 'react';
import styles from './CreateWorker.css';

const CreateWorker = () => {
  const [workerData, setWorkerData] = useState({
    name: '',
    image: '',
    rating: 0,
    location: '',
    phone: '',
    skills: '',
    experience: '',
    availability: '',
    hourlyRate: 0,
    description: '',
    languages: '',
    certifications: '',
    age: '',
    gender: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerData({ ...workerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error

    try {
      const response = await fetch("http://localhost:5000/api/workers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workerData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Worker created successfully:", data);
      window.location.href = `/workers/${data._id}`; // Redirect to the created worker's page
    } catch (error) {
      console.error("Error creating worker:", error);
      setError('Failed to create worker. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.workerForm}>
      {error && <p className={styles.error}>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="HỌ VÀ TÊN"
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Địa chỉ"
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Điện thoại (e.g., 123-456-7890)"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="skills"
        placeholder="Kĩ nẵng (DỌN DẸP NHÀ)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="experience"
        placeholder="Kinh nghiệm"
        onChange={handleChange}
      />
      <input
        type="text"
        name="availability"
        placeholder="Trạng thái (BẬN,RẢNH)"
        onChange={handleChange}
      />
      <input
        type="number"
        name="hourlyRate"
        placeholder="Gía"
        onChange={handleChange}
        min="0"
        step="1000"
      />
      <textarea
        name="description"
        placeholder="Mô tả về bản thân"
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="languages"
        placeholder="Ngôn ngữ (TIẾNG VIỆT)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="certifications"
        placeholder="Chứng chỉ"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Tuổi"
        onChange={handleChange}
        min="18"
      />
      <select name="GIỚI TÍNH" onChange={handleChange} required>
        <option value="">Chọn giới tính</option>
        <option value="Male">NAM</option>
        <option value="Female">NỮ</option>
        <option value="Other">KHÁC</option>
      </select>
      <button type="submit" className={styles.submitButton}>Tạo hồ sơ</button>
    </form>
  );
};

export default CreateWorker;
