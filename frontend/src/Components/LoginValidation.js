function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (!values.email) {
    errors.email = "Email không được để trống";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email không khớp";
  }

  if (!values.password) {
    errors.password = "Mật khẩu không được để trống";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Mật khẩu không khớp";
  }

  return errors;
}

export default Validation;
