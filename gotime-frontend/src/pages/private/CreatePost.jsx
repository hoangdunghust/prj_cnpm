import React, { useState, useEffect } from "react";
import "../../styles/CreatePost.css"; // Importing the CSS file

const CreatePost = () => {
  const [formData, setFormData] = useState({
    id: "1",
    tel: "",
    province: "79",
    district: "",
    title: "",
    content: "",
    job: "1",
    typeWork: "1",
    pay: "1",
    salary: "",
    sex: "0",
    year: "0",
    requirements: "0",
    benefits: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  // Cập nhật giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target; // Dùng name thay vì username
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
  
    if (!formData.tel.trim()) {
      errors.tel = "Số điện thoại là bắt buộc.";
    }
    if (!formData.title.trim()) {
      errors.title = "Tiêu đề là bắt buộc.";
    }
    if (!formData.content.trim()) {
      errors.content = "Nội dung là bắt buộc.";
    }
    if (!formData.salary.trim()) {
      errors.salary = "Lương là bắt buộc.";
    }
  
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Gửi POST request
    fetch("http://localhost:5000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post created successfully:", data);
      window.location.href = `/post/${data.id}`;
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
  };

  // Lấy danh sách tỉnh/thành và quận/huyện
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/")
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  useEffect(() => {
    if (formData.province) {
      fetch(`https://provinces.open-api.vn/api/p/${formData.province}?depth=2`)
        .then((response) => response.json())
        .then((data) => setDistricts(data.districts || []))
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [formData.province]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  return (
    <form onSubmit={handleSubmit} className="post">
      <h5 className="section-title">Tạo tin đăng</h5>
      <div className="row">
        <div className="col-md-12">
          <div className="form-row">
            {/* Số điện thoại */}
            <div className="form-group col-md-6">
              <label htmlFor="inputTel">
                Số điện thoại<span className="color-red">*</span>
              </label>
              <input
                name="tel"
                type="text"
                className="form-control"
                id="inputTel"
                value={formData.tel}
                onChange={handleChange}
              />
              {errors.tel && <span className="error">{errors.tel}</span>}
            </div>
          </div>

          {/* Tỉnh/thành */}
          <div>
            <label htmlFor="province">Tỉnh/thành:</label>
            <select
              name="province"
              id="province"
              className="form-control"
              value={formData.province}
              onChange={handleChange}
            >
              <option value="">Chọn tỉnh/thành</option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>

            {/* Quận/huyện */}
            {formData.province && (
              <div>
                <label htmlFor="district">Quận/huyện:</label>
                <select
                  name="district"
                  id="district"
                  className="form-control"
                  value={formData.district}
                  onChange={handleChange}
                >
                  <option value="">Chọn quận/huyện</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Tiêu đề */}
          <div className="form-group">
            <label htmlFor="inputTitle">
              Tiêu đề<span className="color-red">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="inputTitle"
              placeholder="Tiêu đề"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>

          {/* Nội dung */}
          <div className="form-group">
            <label htmlFor="editor">
              Nội dung<span className="color-red">*</span>
            </label>
            <textarea
              name="content"
              id="editor"
              className="form-control"
              rows="10"
              value={formData.content}
              onChange={handleChange}
            ></textarea>
            {errors.content && <span className="error">{errors.content}</span>}
          </div>

          {/* Lương */}
          <div className="form-group col-md-6">
            <label htmlFor="inputSalary">
              Lương<span className="color-red">*</span>
            </label>
            <input
              name="salary"
              type="text"
              className="form-control"
              id="inputSalary"
              value={formData.salary}
              onChange={handleChange}
            />
            {errors.salary && <span className="error">{errors.salary}</span>}
          </div>

          {/* Tải ảnh */}
          <div className="form-group">
            <label htmlFor="images">Tải ảnh lên:</label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* Nút hành động */}
          <div className="col-md-12 box-avatar row">
            <div className="col-md-6">
              <button type="button" className="btn btn-view">
                Xem trước
              </button>
            </div>
            <div className="col-md-6">
              <button type="submit" className="btn submit-post">
                Đăng ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
