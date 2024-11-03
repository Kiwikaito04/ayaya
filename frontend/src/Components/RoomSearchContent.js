import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/Css/SearchRoom.css';

function RoomSearchContent() {
    const [rooms, setRooms] = useState([]);
    const [roomTypes, setRoomTypes] = useState([]); // Danh sách loại phòng
    const [selectedType, setSelectedType] = useState(''); // Loại phòng đã chọn
    const [available, setAvailable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(5); // Số phòng hiển thị trên mỗi trang

    // Lấy danh sách loại phòng khi component được tải
    useEffect(() => {
        const fetchRoomTypes = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/room-types`); // Sửa URL nếu cần
                setRoomTypes(response.data); // Giả sử endpoint này trả về danh sách loại phòng
            } catch (error) {
                console.error('Có lỗi xảy ra khi lấy loại phòng:', error);
            }
        };

        fetchRoomTypes();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/rooms/search`, {
                params: { type: selectedType, available }
            });
            setRooms(response.data);
            setCurrentPage(1); // Reset trang về 1 mỗi khi tìm kiếm
        } catch (error) {
            console.error('Có lỗi xảy ra khi tìm kiếm phòng:', error);
        }
    };

    useEffect(() => {
        handleSearch(); // Gọi tìm kiếm khi component được tải
    }, [selectedType, available]);

    // Tính toán các chỉ số cho phòng hiện tại
    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

    // Chuyển trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Tính toán tổng số trang
    const totalPages = Math.ceil(rooms.length / roomsPerPage);

    return (
        <div className="room-search">
            <h1>Tìm kiếm Phòng</h1>
            <div>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="">Chọn loại phòng</option>
                    {roomTypes.map((type) => (
                        <option key={type.ID} value={type.Name}> {/* Lấy ID và Name từ database */}
                            {type.Name}
                        </option>
                    ))}
                </select>
                <label>
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                    />
                    Chỉ hiển thị phòng có sẵn
                </label>
                <button onClick={handleSearch}>Tìm kiếm</button>
            </div>

            <h2>Danh sách Phòng</h2>
            <ul>
                {currentRooms.map(room => (
                    <li key={room.ID}>
                        {room.RoomType} - Giá: {room.Price} - Có sẵn: {room.Available ? 'Có' : 'Không'}
                    </li>
                ))}
            </ul>

            {/* Hiển thị thông báo nếu không có phòng nào */}
            {currentRooms.length === 0 && <p>Không có phòng nào phù hợp với tiêu chí tìm kiếm.</p>}

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => paginate(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default RoomSearchContent;
