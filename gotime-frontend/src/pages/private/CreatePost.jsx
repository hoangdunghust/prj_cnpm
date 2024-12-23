import React, { useState , useEffect} from "react";
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

  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormData({ ...formData, [username]: value });
  };
  const [errors, setErrors] = useState({});

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
  
    console.log("Form Data Submitted:", formData);
  };


  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  // Lấy danh sách tỉnh/thành
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/")
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  // Lấy danh sách quận/huyện dựa vào tỉnh đã chọn
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
              <span className="error" id="inputTel_error"></span>
            </div>
          </div>

          <div>
      {/* Chọn tỉnh/thành */}
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

      {/* Chọn quận/huyện */}
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
            <span className="error" id="inputTitle_error"></span>
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
            <span className="error" id="editor_error"></span>
          </div>

          {/* Ngành nghề */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputJob">Ngành nghề</label>
              <select
                className="form-control select-custom"
                id="inputJob"
                name="job"
                value={formData.job}
                onChange={handleChange}
              >
                <option value="1">Giúp việc nhà</option>
                <option value="2">Trông trẻ, chăm bé</option>
                {/* Thêm các ngành nghề khác */}
              </select>
            </div>

            {/* Loại công việc */}
            <div className="form-group col-md-6">
              <label htmlFor="typeWork">Loại công việc</label>
              <select
                className="form-control select-custom"
                id="typeWork"
                name="typeWork"
                value={formData.typeWork}
                onChange={handleChange}
              >
                <option value="1">Định kì</option>
                <option value="2">Theo ca</option>
                {/* Thêm loại công việc khác */}
              </select>
            </div>
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
            <label className="custom-label"></label>
            <span className="error" id="inputSalary_error"></span>
          </div>
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
