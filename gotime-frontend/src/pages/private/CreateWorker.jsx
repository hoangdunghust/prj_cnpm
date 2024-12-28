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
        placeholder="Name"
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
        placeholder="Location"
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (e.g., 123-456-7890)"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />
      <input
        type="text"
        name="availability"
        placeholder="Availability"
        onChange={handleChange}
      />
      <input
        type="number"
        name="hourlyRate"
        placeholder="Hourly Rate"
        onChange={handleChange}
        min="0"
        step="0.01"
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="languages"
        placeholder="Languages (comma separated)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="certifications"
        placeholder="Certifications (comma separated)"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleChange}
        min="18"
      />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className={styles.submitButton}>Create Worker</button>
    </form>
  );
};

export default CreateWorker;
