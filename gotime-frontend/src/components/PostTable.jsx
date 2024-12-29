import React from 'react';

const PostTable = () => {
  // Dữ liệu mẫu
  const postData = [
    {
      id: 1,
      posterId: 101,
      status: 'Chờ duyệt',
      title: 'Cần tìm người giúp việc theo giờ',
      receiverId: null,
    },
    {
      id: 2,
      posterId: 102,
      status: 'Đã nhận',
      title: 'Tìm người trông trẻ buổi tối',
      receiverId: 201,
    },
    // Thêm dữ liệu bài đăng khác tại đây
  ];

  return (
    <div className="post-container">
      <h2>Bảng Bài Đăng</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Người Đăng</th>
            <th>Trạng Thái</th>
            <th>Tiêu Đề</th>
            <th>ID Người Nhận</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {postData.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.posterId}</td>
              <td>{post.status}</td>
              <td>{post.title}</td>
              <td>{post.receiverId ? post.receiverId : 'Chưa có'}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
