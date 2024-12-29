import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/PostManagementPage.css';

const mockPosts = [
  { _id: 1, status: 'Chưa chọn người', title: 'Bài đăng 1', content: 'Mô tả bài đăng 1', name: 'Người đăng 1', createdAt: '2024-01-01', province: 'Hà Nội', district: 'Hoàn Kiếm', helper: null },
  { _id: 2, status: 'Chưa chọn người', title: 'Bài đăng 2', content: 'Mô tả bài đăng 2', name: 'Người đăng 2', createdAt: '2024-01-02', province: 'Hồ Chí Minh', district: 'Quận 1', helper: null },
  // Các bài đăng khác...
];

const PostManagementPage = () => {
  const [posts, setPosts] = useState(mockPosts);
  const navigate = useNavigate();

  const handleManage = (_id) => {
    // Chuyển hướng đến trang chi tiết bài đăng
    navigate(`/post/${_id}`);
  };

  const handleDelete = (_id) => {
    setPosts(posts.filter(post => post._id !== _id));
  };

  return (
    <div className="post-management-container">
      <h2>Quản lý bài đăng</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Trạng thái</th>
              <th>Tiêu đề</th>
              <th>Người giúp việc</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.status}</td>
                <td>{post.title}</td>
                <td>{post.helper || 'Chưa chọn'}</td>
                <td>
                  <button onClick={() => handleManage(post._id)}>Quản lý</button>
                  <button onClick={() => handleDelete(post._id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostManagementPage;
