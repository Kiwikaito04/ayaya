function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone_pattern = /^[0-9]{9}$/; // Chấp nhận chỉ 9 chữ số
  const phoneCode_pattern = /^[0-9]{3}$/; // Chấp nhận chỉ 3 chữ số
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (!values.fullName) {
    error.fullName = "Họ tên không được để trống";
  }
  
  if (!values.email) {
    error.email = "Email không được để trống";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email không đúng định dạng";
  }

  if (!values.phone) {
    error.phone = "Số điện thoại không được để trống";
  } else if (!phone_pattern.test(values.phone)) {
    error.phone = "Số điện thoại phải có 9 chữ số";
  }

  if (!values.phoneCode) {
    error.phoneCode = "Mã vùng không được để trống";
  } else if (!phoneCode_pattern.test(values.phoneCode)) {
    error.phoneCode = "Mã vùng phải có 3 chữ số";
  }

  if (!values.country) {
    error.country = "Quốc gia không được để trống";
  }

  if (!values.address) {
    error.address = "Địa chỉ không được để trống";
  }
  if (!values.username) {
    error.username = "Tên đăng nhập không được để trống";
}

  if (!values.password) {
    error.password = "Mật khẩu không được để trống";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Mật khẩu cần ít nhất 8 ký tự, bao gồm chữ hoa và số";
  }

  return error;
}

export default Validation;
