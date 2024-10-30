import React, { useState } from 'react';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import phone_icon from '../assets/phone.png';
import address_icon from '../assets/address.png';
import '../assets/Css/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    phoneCode: '',
    country: '',
    address: '',
    username: '', // Thêm trường username
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
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          alert(res.data); // Hiển thị thông báo thành công
          navigate('/login'); // Điều hướng về trang đăng nhập sau khi đăng ký thành công
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='container-dk'>
      <div>
        <div className='header-dk'>
          <div className="text-dk">Đăng ký</div>
          <div className="underline-dk"></div>
        </div>
        <form action='' className='inputs-dk' onSubmit={handleSubmit}>
          <div className='input-dk'>
            <img src={user_icon} alt="user icon" />
            <input type='text' placeholder='Enter full name' name='fullName' onChange={handleInput} />
            {errors.fullName && <span className="text-error">{errors.fullName}</span>}
          </div>
          <div className='input-dk'>
            <img src={email_icon} alt="email icon" />
            <input type='email' placeholder='Enter email' name='email' onChange={handleInput} />
            {errors.email && <span className="text-error">{errors.email}</span>}
          </div>
          <div className='input-dk'>
            <img src={phone_icon} alt="phone icon" />
            <input type='text' placeholder='Enter phone' name='phone' onChange={handleInput} />
            {errors.phone && <span className="text-error">{errors.phone}</span>}
          </div>
          <div className='input-dk'>
            <img src={phone_icon} alt="phone code icon" />
            <input type='text' placeholder='Enter phone code' name='phoneCode' onChange={handleInput} />
            {errors.phoneCode && <span className="text-error">{errors.phoneCode}</span>}
          </div>
          <div className='input-dk'>
            <img src={address_icon} alt="country icon" />
            <input type='text' placeholder='Enter country' name='country' onChange={handleInput} />
            {errors.country && <span className="text-error">{errors.country}</span>}
          </div>
          <div className='input-dk'>
            <img src={address_icon} alt="address icon" />
            <input type='text' placeholder='Enter address' name='address' onChange={handleInput} />
            {errors.address && <span className="text-error">{errors.address}</span>}
          </div>
          <div className='input-dk'>
            <img src={user_icon} alt="username icon" />
            <input type='text' placeholder='Enter username' name='username' onChange={handleInput} />
            {errors.username && <span className="text-error">{errors.username}</span>} {/* Thêm thông báo lỗi cho username */}
          </div>
          <div className='input-dk'>
            <img src={password_icon} alt="password icon" />
            <input type='password' placeholder='Enter password' name='password' onChange={handleInput} />
            {errors.password && <span className="text-error">{errors.password}</span>}
          </div>
          <div className='submit-container'>
            <button className="submit-dk"><Link to="/login" className="submit">Đăng nhập</Link></button>
            <button className='submit-dk' type='submit'>Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
