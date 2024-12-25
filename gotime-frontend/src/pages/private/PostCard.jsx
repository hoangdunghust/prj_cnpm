import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/PortCard.css'; // Import CSS cho PostCard

const PostCard = () => {
  const { id } = useParams(); // Lấy id từ URL
  console.log(id);
  const [post, setPost] = useState(null);  // State để lưu dữ liệu bài đăng
  const [loading, setLoading] = useState(true); // State để quản lý loading

  useEffect(() => {
    if (!id) {
      console.error("ID không hợp lệ.");
      return;
    }
  
    fetch(`http://localhost:5000/api/post/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bài đăng không tồn tại');
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi tải bài đăng:', error);
        setLoading(false);
      });
  }, [id]); // Đảm bảo id thay đổi khi URL thay đổi
   // Đảm bảo id thay đổi khi URL thay đổi
; // Chạy lại khi id thay đổi

  if (loading) {
    return <p>Đang tải bài đăng...</p>;
  }

  if (!post) {
    return (
      <p>
        Không tìm thấy bài đăng. <a href="/">Quay lại trang chủ</a>
      </p>
    );
  }

  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <p className="post-details">
        <strong>Số điện thoại:</strong> {post.tel} <br />
        <strong>Tỉnh/Thành:</strong> {post.province} <br />
        <strong>Quận/Huyện:</strong> {post.district} <br />
        <strong>Ngành nghề:</strong> {post.job} <br />
        <strong>Loại công việc:</strong> {post.typeWork} <br />
        <strong>Lương:</strong> {post.salary} VND <br />
        <strong>Yêu cầu:</strong> {post.requirements} <br />
        <strong>Quyền lợi:</strong> {post.benefits} <br />
      </p>
      <div className="post-images">
        {post.images && post.images.length > 0 ? (
          post.images.map((image, index) => (
            <img key={index} src={`/images/${image}`} alt={`Post Image ${index + 1}`} />
          ))
        ) : (
          <p>Không có hình ảnh nào được đính kèm.</p>
        )}
      </div>
      <button class="exit" ><a href="/" class=""> Thoát</a>
        </button>
    </div>
  );
};

export default PostCard;
