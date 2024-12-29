import React from 'react';

const UserProfileTable = () => {
  // Dữ liệu mẫu
  const userData = [
    {
      id: 1,
      fullName: 'Nguyễn Văn A',
      password: '********',
      address: '123 Đường ABC, Quận 1, TP. HCM',
      phone: '0123456789',
      email: 'nguyenvana@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      fullName: 'Trần Thị B',
      password: '********',
      address: '456 Đường XYZ, Quận 2, TP. HCM',
      phone: '0987654321',
      email: 'tranthib@example.com',
      role: 'User',
    },
    // Thêm dữ liệu người dùng khác tại đây
  ];

  return (
    <div className="user-profile-container">
      <h2>Bảng Hồ sơ Người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Mật khẩu</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Role</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.password}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
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

export default UserProfileTable;
