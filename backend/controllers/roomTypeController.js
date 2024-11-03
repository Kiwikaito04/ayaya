const db = require('../database');

// Get Room Types
exports.getRoomTypes = (req, res) => {
    const sql = "SELECT * FROM RoomType";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Error fetching room types" });
        return res.json(results);
    });
};