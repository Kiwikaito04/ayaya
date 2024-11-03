// controllers/roomController.js
const db = require('../database');

// Create Room
exports.createRoom = (req, res) => {
    const roomData = [
        req.body.roomType,
        req.body.price,
        req.body.amenities
    ];
    const sql = "INSERT INTO Rooms (RoomType, Price, Amenities) VALUES (?)";
    db.query(sql, [roomData], (err, result) => {
        if (err) return res.status(500).json({ error: "Error creating room" });
        return res.json({ message: "Room created successfully", roomId: result.insertId });
    });
};

// Get Rooms
exports.getRooms = (req, res) => {
    const sql = "SELECT * FROM Rooms";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Error fetching rooms" });
        return res.json(results);
    });
};

// Update Room
exports.updateRoom = (req, res) => {
    const roomData = [
        req.body.roomType,
        req.body.price,
        req.body.amenities,
        req.params.id
    ];
    const sql = "UPDATE Rooms SET RoomType = ?, Price = ?, Amenities = ? WHERE ID = ?";
    db.query(sql, roomData, (err) => {
        if (err) return res.status(500).json({ error: "Error updating room" });
        return res.json({ message: "Room updated successfully" });
    });
};

// Delete Room
exports.deleteRoom = (req, res) => {
    const sql = "DELETE FROM Rooms WHERE ID = ?";
    db.query(sql, [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: "Error deleting room" });
        return res.json({ message: "Room deleted successfully" });
    });
};

// Tìm kiếm Phòng
exports.searchRooms = (req, res) => {
    const { type, available } = req.query;
    let sql = "SELECT * FROM Rooms WHERE 1=1"; // Dùng 1=1 để dễ dàng thêm điều kiện

    const queryParams = [];
    
    if (type) {
        sql += " AND RoomType = ?";
        queryParams.push(type);
    }

    if (available !== undefined) {
        sql += " AND Available = ?";
        queryParams.push(available === 'true' ? 1 : 0);
    }

    db.query(sql, queryParams, (err, results) => {
        if (err) return res.status(500).json({ error: "Error fetching rooms" });
        return res.json(results);
    });
};

