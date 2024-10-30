import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../assets/Css/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy tên người dùng từ localStorage khi component được tải
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Xóa tên người dùng khỏi localStorage và chuyển hướng về trang chủ
    localStorage.removeItem('username');
    setUsername('');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/schedule">Lịch trình</Link></li>
        <li><a href="/">Tra cứu vé</a></li>
        <li><a href="/">Hóa đơn</a></li>
        <li><a href="/">Về chúng tôi</a></li>
      </ul>
      <div className="logo-container">
        <img src={logo} alt="Xe Dai Nam" className="logo" />
      </div>
      <div className="loginbtn">
        {username ? (
          <>
            <span>{username}</span>
            <button onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <>
            <button><Link to='/login'>Đăng Nhập</Link></button>
            <button><Link to='/signup'>Đăng ký</Link></button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
