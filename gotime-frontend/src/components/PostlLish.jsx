import React from 'react';
import '../styles/PostLish.css';
import CardUsed from './CardUsed';
const posts = [
  {
    id: 1,
    title: 'Công việc A',
    content: 'Mô tả công việc A: Làm việc tại văn phòng, giờ hành chính, yêu cầu kỹ năng giao tiếp tốt.',
    username: 'Nguyễn Văn A',
    provinces: 'Hà Nội',
    districts: 'Cầu Giấy',
    date: '2024-12-22',
  },
  {
    id: 2,
    title: 'Công việc B',
    content: 'Mô tả công việc B: Làm việc từ xa, yêu cầu kinh nghiệm lập trình web.',
    username: 'Trần Văn B',
    provinces: 'TP Hồ Chí Minh',
    districts: 'Quận 1',
    date: '2024-12-23',
  },
  {
    id: 3,
    title: 'Công việc C',
    content: 'Mô tả công việc C: Bán hàng tại cửa hàng, yêu cầu chăm chỉ, nhiệt tình.',
    username: 'Lê Thị C',
    provinces: 'Đà Nẵng',
    districts: 'Hải Châu',
    date: '2024-12-24',
  },
  {
    id: 4,
    title: 'Công việc D',
    content: 'Mô tả công việc D: Quản lý dự án, yêu cầu kinh nghiệm tối thiểu 3 năm.',
    username: 'Phạm Văn D',
    provinces: 'Hải Phòng',
    districts: 'Ngô Quyền',
    date: '2024-12-25',
  },
  {
    id: 5,
    title: 'Công việc E',
    content: 'Mô tả công việc E: Thiết kế đồ họa, yêu cầu sử dụng thành thạo Adobe Photoshop và Illustrator.',
    username: 'Ngô Thị E',
    provinces: 'Cần Thơ',
    districts: 'Ninh Kiều',
    date: '2024-12-26',
  },
  {
    id: 6,
    title: 'Công việc F',
    content: 'Mô tả công việc F: Lái xe tải, yêu cầu có bằng lái xe hạng C.',
    username: 'Đặng Văn F',
    provinces: 'Bắc Ninh',
    districts: 'Từ Sơn',
    date: '2024-12-27',
  },
  {
    id: 7,
    title: 'Công việc G',
    content: 'Mô tả công việc G: Làm việc trong nhà máy sản xuất, yêu cầu sức khỏe tốt.',
    username: 'Hoàng Thị G',
    provinces: 'Nam Định',
    districts: 'Nam Trực',
    date: '2024-12-28',
  },
  {
    id: 8,
    title: 'Công việc H',
    content: 'Mô tả công việc H: Dịch vụ khách hàng, yêu cầu khả năng giải quyết vấn đề tốt.',
    username: 'Bùi Văn H',
    provinces: 'Thái Bình',
    districts: 'Thái Thụy',
    date: '2024-12-29',
  },
  {
    id: 9,
    title: 'Công việc I',
    content: 'Mô tả công việc I: Phân tích dữ liệu, yêu cầu thành thạo Excel và SQL.',
    username: 'Vũ Thị I',
    provinces: 'Quảng Ninh',
    districts: 'Hạ Long',
    date: '2024-12-30',
  },
];

const PostLish = () => {
  return (
    <div className="container__postlish">
    <h2 className="postlish__header">Các bài đăng gần đây</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
                    <CardUsed key={post.id} post={post} />
                  ))}
    </div>
    </div>
  );
};

export default PostLish;
