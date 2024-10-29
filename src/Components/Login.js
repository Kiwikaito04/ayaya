import React, { useState } from 'react';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import '../assets/Css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data.status === "Success") {
            localStorage.setItem('username', res.data.name);
            navigate('/');
          } else {
            alert("No record existed");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container">
      <div>
        <div className="header">
          <div className="text">Đăng nhập</div>
          <div className="underline"></div>
        </div>
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input
              type="email"
              placeholder="Enter email"
              onChange={handleInput}
              name="email"
            />
            {errors.email && <span className="text-error">{errors.email}</span>}
          </div>
          <div className="input">
            <img src={password_icon} alt="password icon" />
            <input
              type="password"
              placeholder="Enter password"
              onChange={handleInput}
              name="password"
            />
            {errors.password && <span className="text-error">{errors.password}</span>}
          </div>
          <div className="submit-container">
            <button className="submit" type="submit">Đăng nhập</button>
            <Link to="/signup" className="submit">
              Đăng ký
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
