import React from 'react';
import '../../styles/PortCard.css'; // Import CSS cho PostCard
import { useParams } from 'react-router-dom';

const posts = [
    {
        id: "1",
        tel: "0867676305",
        province: "23",
        district: "",
        title: "",
        content: "",
        job: "2",
        typeWork: "1",
        pay: "1",
        salary: "",
        sex: "0",
        year: "0",
        requirements: "0",
        benefits: "",
        images: [],
    }];
const PostCard = () => {
    const { id } = useParams(); // Lấy id từ URL
      const post = posts.find(post => post.id === parseInt(id, 10)); // Tìm worker theo id
      if (!post) {
        return <p>Không tìm thấy thông tin người lao động.</p>;
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
        {post.images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Post Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;