import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/PostDetailPage.css';

// Giả sử bạn có danh sách người giúp việc đã đăng ký
const availableHelpers = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Thị B' },
  { id: 3, name: 'Lê Thị C' },
  // Các người giúp việc khác...
];

const PostDetailPage = () => {
  const { id } = useParams(); // Lấy ID bài đăng từ URL
  const navigate = useNavigate();
  
  // Giả sử bài đăng có dữ liệu mock như sau (thực tế bạn có thể lấy từ API)
  const [post, setPost] = useState({
    _id: id,
    title: 'Bài đăng mẫu',
    content: 'Mô tả chi tiết bài đăng...',
    province: 'Hà Nội',
    district: 'Hoàn Kiếm',
    name: 'Người đăng',
    createdAt: '2024-01-01',
    helper: null, // Người giúp việc đã được chọn
  });

  const [selectedHelper, setSelectedHelper] = useState(post.helper);

  useEffect(() => {
    // Giả sử bạn có thể lấy thông tin bài đăng từ API
    // Ví dụ: setPost(responseFromApi);
  }, [id]);

  const handleAssignHelper = () => {
    if (selectedHelper) {
      setPost((prevPost) => ({ ...prevPost, helper: selectedHelper }));
      // Cập nhật bài đăng với người giúp việc đã chọn
      alert(`Đã chọn người giúp việc: ${selectedHelper.name}`);
    } else {
      alert('Vui lòng chọn người giúp việc.');
    }
  };

  const handleBack = () => {
    navigate('/post-management'); // Quay lại trang quản lý bài đăng
  };

  return (
    <div className="post-detail-page">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-info">
        <span>Người đăng: {post.name}</span>
        <span className="mx-2">|</span>
        <span>Ngày đăng: {new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="mx-2">|</span>
        <span>Vị trí: {post.province}, {post.district}</span>
      </div>
      <div className="helper-selection">
        <label>Chọn người giúp việc:</label>
        <select
          value={selectedHelper ? selectedHelper.id : ''}
          onChange={(e) => setSelectedHelper(availableHelpers.find(helper => helper.id === Number(e.target.value)))}
        >
          <option value="">Chọn người giúp việc</option>
          {availableHelpers.map(helper => (
            <option key={helper.id} value={helper.id}>
              {helper.name}
            </option>
          ))}
        </select>
        <button onClick={handleAssignHelper}>Chọn người giúp việc</button>
      </div>

      <button onClick={handleBack}>Quay lại trang quản lý bài đăng</button>
    </div>
  );
};

export default PostDetailPage;
