import React, { useEffect, useState } from 'react';
import '../styles/PostLish.css';
import CardUsed from './CardUsed';

const PostLish = () => {
  const [posts, setPosts] = useState([]);  // State để lưu dữ liệu bài đăng (mảng)
  const [loading, setLoading] = useState(true); // State để quản lý loading
  const [error, setError] = useState(null);  // State để quản lý lỗi

  useEffect(() => {
    // Lấy dữ liệu bài đăng từ API
    fetch('http://localhost:5000/api/post')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không thể tải bài đăng');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);  // Giả sử API trả về một mảng các bài đăng
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi tải bài đăng:', error);
        setError('Lỗi khi tải bài đăng. Vui lòng thử lại sau.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Đang tải bài đăng...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (posts.length === 0) {
    return <p>Không có bài đăng nào để hiển thị.</p>;
  }

  return (
    <div className="container__postlish">
      <h2 className="postlish__header">Các bài đăng gần đây</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <CardUsed key={post._id || post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostLish;
