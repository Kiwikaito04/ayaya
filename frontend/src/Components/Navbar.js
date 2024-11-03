// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom'; 
// import '../assets/Css/Navbar.css';
// import logo from '../assets/logo.png';

// function Navbar() {
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation(); //Dùng cái này để lấy location cho link

//   useEffect(() => {
//     // Lấy tên người dùng từ localStorage khi component được tải
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Xóa tên người dùng khỏi localStorage và chuyển hướng về trang chủ
//     localStorage.removeItem('username');
//     setUsername('');
//     navigate('/');
//   };

//   return (
//     <nav className="navbar">
//       <ul className="navbar-left">
//         <li className="NameHotel"><Link to="/">Ayaya's Hotel</Link></li>
//         <li className={location.pathname === "/" ? "active" : ""}>
//           <Link to="/">Trang chủ</Link>
//         </li>
//         <li className={location.pathname === "/schedule" ? "active" : ""}>
//           <Link to="/schedule">Lịch trình</Link>
//         </li>
//         <li className={location.pathname === "/lookup" ? "active" : ""}>
//           <a href="/">Tra cứu vé</a>
//         </li>
//         <li className={location.pathname === "/invoice" ? "active" : ""}>
//           <a href="/">Hóa đơn</a>
//         </li>
//         <li className={location.pathname === "/about" ? "active" : ""}>
//           <a href="/about">Về chúng tôi</a>
//         </li>
//       </ul>
//       {/* <div className="logo-container">
//         <img src={logo} alt="Xe Dai Nam" className="logo" />
//       </div> */}
//       <div className="loginbtn">
//         {username ? (
//           <>
//             <span>{username}</span>
//             <button onClick={handleLogout}>Đăng xuất</button>
//           </>
//         ) : (
//           <>
//             <button><Link to='/login'>Đăng Nhập</Link></button>
//             <button><Link to='/signup'>Đăng ký</Link></button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import '../assets/Css/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Dùng cái này để lấy location cho link

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
        <li className="NameHotel"><Link to="/">Ayaya's Hotel</Link></li>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Trang chủ</Link>
        </li>
        <li className={location.pathname === "/schedule" ? "active" : ""}>
          <Link to="/schedule">Lịch trình</Link>
        </li>
        <li className={location.pathname === "/lookup" ? "active" : ""}>
          <a href="/">Tra cứu vé</a>
        </li>
        {/* Chỉ hiển thị phần Hóa đơn nếu đã đăng nhập */}
        {username && (
          <li className={location.pathname === "/invoice" ? "active" : ""}>
            <a href="/">Hóa đơn</a>
          </li>
        )}
        <li className={location.pathname === "/about" ? "active" : ""}>
          <a href="/about">Về chúng tôi</a>
        </li>
      </ul>
      {/* <div className="logo-container">
        <img src={logo} alt="Xe Dai Nam" className="logo" />
      </div> */}
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
