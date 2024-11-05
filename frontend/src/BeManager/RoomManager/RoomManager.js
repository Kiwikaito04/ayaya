import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import '../../assets/Css/RoomManager.css';

const RoomManager = () => {
    const [rooms, setRooms] = useState([]); // Lưu trữ danh sách phòng
    const [form, setForm] = useState({ Available: true, ID_Type: '', ID_Agency: '' });
    const [editing, setEditing] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại cho phân trang
    const [totalRooms, setTotalRooms] = useState(0); // Tổng số phòng
    const roomsPerPage = 5; // Số phòng hiển thị trên mỗi trang
    const [message, setMessage] = useState('');

    // Hàm lấy dữ liệu phòng từ server
    const fetchRooms = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/rooms?page=${currentPage}&limit=${roomsPerPage}`);
            setRooms(response.data.rooms);
            setTotalRooms(response.data.totalRooms);
        } catch (error) {
            console.error('Error fetching rooms:', error);
            setMessage('Failed to fetch rooms.');
        }
    }, [currentPage]);

    useEffect(() => {
        document.body.classList.add('custom-body');

        // Xóa lớp khi component unmount
        return () => {
            document.body.classList.remove('custom-body');
        };
        fetchRooms();
    }, [fetchRooms]);

    // Hàm xử lý thay đổi dữ liệu nhập liệu
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Hàm xử lý khi gửi form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (editing) {
                response = await axios.put(`http://localhost:8081/api/rooms/${editing}`, form);
            } else {
                response = await axios.post('http://localhost:8081/api/rooms', form);
            }
            if (response.status === 201 || response.status === 200) {
                setMessage('Room added/updated successfully!');
                setForm({ Available: true, ID_Type: '', ID_Agency: '' });
                setEditing(null);
                fetchRooms();
            }
        } catch (error) {
            console.error('Error submitting room form:', error);
            setMessage('Failed to add/update room. Please try again.');
        }
    };

    // Hàm xử lý khi nhấn nút chỉnh sửa
    const handleEdit = (room) => {
        setForm(room);
        setEditing(room.ID);
    };

    // Hàm xử lý khi nhấn nút xóa
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/rooms/${id}`);
            fetchRooms();
            setMessage('Room deleted successfully!');
        } catch (error) {
            console.error('Error deleting room:', error);
            setMessage('Failed to delete room. Please try again.');
        }
    };

    // Hàm xử lý khi nhấn nút thoát
    const handleCancel = () => {
        setEditing(null);
        setForm({ Available: true, ID_Type: '', ID_Agency: '' }); // Đặt lại form
    };

    // Hàm xử lý thay đổi trang
    const handlePageChange = (direction) => {
        setCurrentPage((prevPage) => (direction === 'next' ? prevPage + 1 : prevPage - 1));
    };

    return (
        <>
            <div className="RM_background-image"></div>
            <div className='RM_container'>
                <div>
                    <h1>Rooms</h1>
                    {message && <div className="RM_message">{message}</div>}

                    <form onSubmit={handleSubmit}>
                        <label className='RM_label'>
                            Available:
                            <input
                                type="checkbox"
                                name="Available"
                                checked={form.Available}
                                onChange={() => setForm({ ...form, Available: !form.Available })}
                            />
                        </label>
                        <label className='RM_label'>
                            Room Type ID:
                            <input type="number" name="ID_Type" value={form.ID_Type} onChange={handleChange} />
                        </label>
                        <label className='RM_label'>
                            Agency ID:
                            <input type="number" name="ID_Agency" value={form.ID_Agency} onChange={handleChange} />
                        </label>
                        <button className='submit_button' type="submit">{editing ? 'Update' : 'Add'} Room</button>
                        {editing && <button className='cancel_button' type="button" onClick={handleCancel}>Cancel Update</button>} {/* Nút thoát update */}
                    </form>

                    <hr class="line"></hr>

                    <h1>Room List</h1>
                    <ul className='RM_ul'>
                        {rooms.map((room) => (
                            <li key={room.ID}>
                                <strong>Room ID:</strong> {room.ID} <br />
                                <strong>Type:</strong> {room.RoomType || 'N/A'} <br />
                                <strong>Agency:</strong> {room.Agency || 'N/A'} <br />
                                <strong>Available:</strong> {room.Available ? 'Yes' : 'No'}
                                <button className="edit" onClick={() => handleEdit(room)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(room.ID)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <div className='pagenumber'>
                        <button className='pagebutton' disabled={currentPage === 1} onClick={() => handlePageChange('prev')}>Previous</button>
                        <span>Page {currentPage}</span>
                        <button className='pagebutton' disabled={rooms.length < roomsPerPage} onClick={() => handlePageChange('next')}>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomManager;
