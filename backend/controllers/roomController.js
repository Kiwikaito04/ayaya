// controllers/roomController.js
const db = require('../database');


// Lấy tất cả phòng
exports.getRooms = (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (currentPage - 1) * limit;

    db.query('SELECT r.ID, r.Available, rt.Name AS RoomType, a.Name AS Agency FROM Room r JOIN RoomType rt ON r.ID_Type = rt.ID JOIN Agency a ON r.ID_Agency = a.ID LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
        if (err) {
            console.error('Error fetching rooms:', err);
            return res.status(500).json({ error: 'Database query error' });
        }

        db.query('SELECT COUNT(*) AS totalRooms FROM Room', (err, countResults) => {
            if (err) {
                console.error('Error counting rooms:', err);
                return res.status(500).json({ error: 'Database query error' });
            }
            res.json({ rooms: results, totalRooms: countResults[0].totalRooms });
        });
    });
};

// Tạo phòng
exports.createRoom = (req, res) => {
    const { Available, ID_Type, ID_Agency } = req.body;
    db.query('INSERT INTO Room (Available, ID_Type, ID_Agency) VALUES (?, ?, ?)', [Available, ID_Type, ID_Agency], (err, results) => {
        if (err) {
            console.error('Error inserting room:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(201).json({ id: results.insertId, Available, ID_Type, ID_Agency });
    });
};

// Cập nhật phòng
exports.updateRoom = (req, res) => {
    const id = req.params.id;
    const { Available, ID_Type, ID_Agency } = req.body;
    db.query('UPDATE Room SET Available = ?, ID_Type = ?, ID_Agency = ? WHERE ID = ?', [Available, ID_Type, ID_Agency, id], (err) => {
        if (err) {
            console.error('Error updating room:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json({ id, Available, ID_Type, ID_Agency });
    });
};

// Xóa phòng
exports.deleteRoom = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Room WHERE ID = ?', [id], (err) => {
        if (err) {
            console.error('Error deleting room:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json({ message: 'Room deleted' });
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

