import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Css/HomeContent.css';
import Slider from 'react-slick';
import { hotels, city, nights } from '../data/hotelsData';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"  }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function HomeContent() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNights, setSelectedNights] = useState(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAdultsChange = (value) => {
    setAdults(Math.max(0, adults + value)); // so luong  se khong am khi nhn - lien tuc
  };

  const handleChildrenChange = (value) => {
    setChildren(Math.max(0, children + value)); // so luong  se khong am khi nhn - lien tuc
  };

  const handleRoomsChange = (value) => {
    setRooms(Math.max(0, rooms + value)); // so luong  se khong am khi nhn - lien tuc
  };

  const images = [
    require('../assets/slideshow1.jpg'),
    require('../assets/slideshow2.jpg'),
    require('../assets/slideshow3.jpg'),
    // require('../assets/ads1.jpg'),
    require('../assets/ads2.jpg'),
    require('../assets/ads3.jpg'),
  ];

  const locationvn = [
    require ('../assets/location/vn/sapa.jpeg'),
    require ('../assets/location/vn/Phan Thiet.jpeg'),
    require ('../assets/location/vn/Nha Trang.jpeg'),
    require ('../assets/location/vn/Phu Quoc.jpeg'),
    require ('../assets/location/vn/Ba ria - Vung Tau.jpeg'),
    require ('../assets/location/vn/Da Lat.jpeg'),
    require ('../assets/location/vn/Ha Noi.jpeg'),
    require ('../assets/location/vn/Da Nang.jpeg'),
    require ('../assets/location/vn/Ho Chi Minh.jpeg'),
  ]



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500 ,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className='MainContent'>

      <div className='slideshow-image'>
        <div className='slider'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} />
            </div>
          ))}
        </Slider>
        </div>
      </div>

      <div className='search-container'>
        <h5>Tìm kiếm khách sạn...</h5>

        {/* Chọn thành phố */}
        <div className='search-city'>
          <label className='search-label'>Thành phố: </label>
          <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
            <option value=''>Chọn thành phố</option>
            {city.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Chọn số đêm */}
        <div className='search-nights'>
          <label className='search-label'>Số đêm: </label>
          <select value={selectedNights} onChange={e => setSelectedNights(parseInt(e.target.value))}>
            {nights.map((night, index) => (
              <option key={index} value={index + 1}>{night}</option>
            ))}
          </select>
        </div>

        {/* Dropdown chọn số lượng khách và phòng */}
        <div className='search-dropdown'>
          <label className='search-label'>Khách và Phòng: </label>
          <button className="dropdown-btn" onClick={toggleDropdown}>
            {adults} người lớn, {children} trẻ em, {rooms} phòng
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">

              <div className="item">
                <span>Người lớn</span>
                <div className="counter">
                  <button onClick={() => handleAdultsChange(-1)}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => handleAdultsChange(1)}>+</button>
                </div>
              </div>

              <div className="item">
                <span>Trẻ em</span>
                <div className="counter">
                  <button onClick={() => handleChildrenChange(-1)}>-</button>
                  <span>{children}</span>
                  <button onClick={() => handleChildrenChange(1)}>+</button>
                </div>
              </div>

              <div className="item">
                <span>Phòng</span>
                <div className="counter">
                  <button onClick={() => handleRoomsChange(-1)}>-</button>
                  <span>{rooms}</span>
                  <button onClick={() => handleRoomsChange(1)}>+</button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className='search-button'>
          <button>Tìm kiếm</button>
        </div>
      </div>

      <div className='promotion-container'>
      <div className='promotion-vn'>
        <h2>Giá tốt tại các điểm đến nội địa</h2>
        <Slider {...settings2}>
        {locationvn.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} />
            </div>
          ))}
      </Slider>
      </div> 

      <div className='promotion-global'>
        <h2>Giá tốt tại các điểm đến quốc tế</h2>
      </div>
      </div>
      <div className='reason-container'>
      <div className='promotion-ads'>
        <h2>Tại sao nên đặt chỗ tai day?</h2>
      </div>
      </div>

      

    </div>
  );
}

export default HomeContent;
