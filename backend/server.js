// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');
// const bcrypt = require('bcrypt'); // For password hashing


// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "hotel_management"
// });

// // Đăng ký Guest và tạo tài khoản User
// app.post('/signup', (req, res) => {
//     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
//     const guestData = [
//         req.body.fullName,
//         req.body.email,
//         req.body.phone,
//         req.body.phoneCode,
//         req.body.country,
//         req.body.address
//     ];
    
//     // Thêm thông tin khách hàng vào bảng Guest
//     const guestSql = "INSERT INTO Guest (FullName, Email, Phone, PhoneCode, Country, Address) VALUES (?)";
//     db.query(guestSql, [guestData], (err, guestResult) => {
//         if (err) {
//             return res.status(500).json({ error: "Error in Guest Registration" });
//         }
        
//         // Thêm tài khoản User sử dụng ID của khách hàng mới thêm
//         const userSql = "INSERT INTO User (ID_Guest, UserName, Password) VALUES (?, ?, ?)";
//         const userValues = [
//             guestResult.insertId, // ID của khách hàng mới thêm
//             req.body.username,
//             hashedPassword
//         ];
        
//         db.query(userSql, userValues, (err, userResult) => {
//             if (err) {
//                 return res.status(500).json({ error: "Error in User Registration" });
//             }
//             return res.json("Signup Success");
//         });
//     });
// });


// // Đăng nhập cho User
// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM User JOIN Guest ON User.ID_Guest = Guest.ID WHERE Guest.Email = ?";
//     db.query(sql, [req.body.email], (err, data) => {
//         if (err) {
//             return res.status(500).json({ error: "Error during login" });
//         }
//         if (data.length > 0) {
//             const validPassword = bcrypt.compareSync(req.body.password, data[0].Password);
//             if (validPassword) {
//                 return res.json({ status: "Success", name: data[0].FullName });
//             } else {
//                 return res.json("No record existed");
//             }
//         } else {
//             return res.json("No record existed");
//         }
//     });
// });

// // CRUD cho phòng
// // Tạo phòng
// app.post('/rooms', (req, res) => {
//     const roomData = [
//         req.body.roomType,
//         req.body.price,
//         req.body.amenities
//     ];
//     const sql = "INSERT INTO Rooms (RoomType, Price, Amenities) VALUES (?)";
//     db.query(sql, [roomData], (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: "Error creating room" });
//         }
//         return res.json({ message: "Room created successfully", roomId: result.insertId });
//     });
// });

// // Đọc danh sách phòng
// app.get('/rooms', (req, res) => {
//     const sql = "SELECT * FROM Rooms";
//     db.query(sql, (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: "Error fetching rooms" });
//         }
//         return res.json(results);
//     });
// });

// // Cập nhật phòng
// app.put('/rooms/:id', (req, res) => {
//     const roomData = [
//         req.body.roomType,
//         req.body.price,
//         req.body.amenities,
//         req.params.id
//     ];
//     const sql = "UPDATE Rooms SET RoomType = ?, Price = ?, Amenities = ? WHERE ID = ?";
//     db.query(sql, roomData, (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: "Error updating room" });
//         }
//         return res.json({ message: "Room updated successfully" });
//     });
// });

// // Xóa phòng
// app.delete('/rooms/:id', (req, res) => {
//     const sql = "DELETE FROM Rooms WHERE ID = ?";
//     db.query(sql, [req.params.id], (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: "Error deleting room" });
//         }
//         return res.json({ message: "Room deleted successfully" });
//     });
// });



// app.listen(8081, () => {
//     console.log("Server is running");
// });

const express = require("express");
const cors = require("cors");
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const roomTypeRoutes = require('./routes/roomTypeRoutes');

// Use routes
app.use(authRoutes);
app.use( '/api/rooms',roomRoutes);
app.use(roomTypeRoutes);

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});