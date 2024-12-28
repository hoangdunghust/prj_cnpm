import React, { useEffect, useState } from 'react';
import Card from './Card';
import './index.css';
import axios from 'axios';

const WorkerLish = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/workers'); // URL API backend
        setWorkers(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách người giúp việc:', error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Người giúp việc nổi bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workers.length > 0 ? (
          workers.map((worker) => <Card key={worker._id} worker={worker} />)
        ) : (
          <p className="text-center col-span-3">Không có dữ liệu.</p>
        )}
      </div>
    </div>
  );
};

export default WorkerLish;
