import React from "react";
import '../assets/Css/About.css';
import logo from '../assets/logo.png';
import about1 from '../assets/About1.png';
import about2 from '../assets/About2.png';
import about3 from '../assets/About3.png';

function AboutContent() {
    return (
        <div className="About-content">
            <h1 style={{ color: '#007bff' }}>KHÁCH SẠN AYAYA</h1>
            <h2>Vì sự thoải mái và hài lòng của bạn</h2>
            <div className="intro-content" style={{ textAlign: 'start' }}>
                <p style={{ textAlign: 'justify' }}>Khách sạn Ayaya được thành lập vào ngày 01/01/2000, với sứ mệnh mang đến cho khách hàng trải nghiệm nghỉ dưỡng tuyệt vời, đẳng cấp và chất lượng dịch vụ hoàn hảo. Tọa lạc tại trung tâm thành phố, Ayaya Hotel là điểm đến lý tưởng cho những ai tìm kiếm sự thư giãn và thoải mái giữa nhịp sống sôi động.</p>
                <p style={{ textAlign: 'justify' }}>Trải qua hơn 20 năm phát triển, với phương châm lấy khách hàng làm trọng tâm, chúng tôi tự hào là một trong những khách sạn hàng đầu tại Việt Nam, nhận được nhiều giải thưởng danh giá như “Khách sạn hàng đầu Việt Nam”, “Top 10 dịch vụ được người tiêu dùng yêu thích năm 2024”.</p>
            </div>
            <div className="body-content">
                <div className="body-image"><img src={about1} height="100%" alt="Ayaya Hotel" /></div>
                <div className="body-text">
                    <h2 style={{ color: '#007bff' }}>TẦM NHÌN VÀ SỨ MỆNH</h2>
                    <p style={{ color: '#007bff', fontWeight: 'bold' }}>Mang đến những trải nghiệm nghỉ dưỡng đẳng cấp</p>
                    <p>Trở thành khách sạn uy tín hàng đầu Việt Nam với các cam kết:</p>
                    <ul>
                        <li><a>Tạo môi trường nghỉ dưỡng thoải mái và thân thiện cho mọi khách hàng.</a></li>
                        <li><a>Chất lượng dịch vụ là ưu tiên hàng đầu, nhằm xây dựng lòng tin từ khách hàng.</a></li>
                        <li><a>Không ngừng cải tiến để giữ vững vị thế trong ngành khách sạn.</a></li>
                    </ul>
                    <p><a style={{ color: '#007bff', fontWeight: 'bold' }}>Ayaya Hotel</a> luôn hướng tới mục tiêu nâng cao trải nghiệm nghỉ dưỡng, đáp ứng kỳ vọng của khách hàng.</p>
                </div>
            </div>
            <div className="body-content">
                <div className="body-text">
                    <h2 style={{ color: '#007bff' }}>GIÁ TRỊ CỐT LÕI</h2>
                    <p>Giá trị cốt lõi <a style={{ color: '#007bff', fontWeight: 'bold' }}>- AYAYA HOTEL</a></p>
                    <ul>
                        <li><p>thân thiện và hiếu khách.</p></li>
                        <li><p>tinh tế và chu đáo trong từng chi tiết.</p></li>
                        <li><p>Kết nối mọi người qua những trải nghiệm tuyệt vời và dịch vụ hoàn hảo.</p></li>
                    </ul>
                </div>
                <div className="body-image"><img src={about2} height="100%" width={400} alt="Ayaya Hotel" /></div>
            </div>
            <div className="body-content">
                <div className="body-image"><img src={about3} height="100%" alt="Ayaya Hotel" /></div>
                <div className="body-text">
                    <h2 style={{ color: '#007bff' }}>TRIẾT LÝ</h2>
                    <p style={{ textAlign: 'justify' }}>Ayaya Hotel cam kết mang đến một kỳ nghỉ an toàn, chất lượng và đáng nhớ cho mỗi khách hàng. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu, lấy uy tín và sự tận tâm làm kim chỉ nam trong mọi hoạt động. Với tinh thần phục vụ chuyên nghiệp, Ayaya Hotel không chỉ là nơi nghỉ dưỡng mà còn là người bạn đồng hành đáng tin cậy trên mỗi chặng đường, đem đến trải nghiệm nghỉ dưỡng tuyệt vời và sự hài lòng tuyệt đối cho khách hàng.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
