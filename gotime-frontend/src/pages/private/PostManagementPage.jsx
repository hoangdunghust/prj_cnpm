import React, { useState } from 'react';
import '../../styles/PostManagementPage.css'; // Import file CSS đã tạo

// Giả sử bạn có dữ liệu bài đăng
const mockPosts = [
  { id: 1, status: 'Chưa chọn người', title: 'Bài đăng 1', helper: null },
  { id: 2, status: 'Đã chọn người', title: 'Bài đăng 2', helper: 'Người giúp việc A' },
  // Các bài đăng khác...
];

const PostManagementPage = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleDelete = (postId) => {
    // Xóa bài đăng
    setPosts(posts.filter((post) => post.id !== postId));
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
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.status}</td>
                <td>{post.title}</td>
                <td>{post.helper || 'Chưa chọn'}</td>
                <td>
                  <button onClick={() => handleDelete(post.id)}>Xóa</button>
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
