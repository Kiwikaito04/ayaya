
const db = require('../database');
const bcrypt = require('bcrypt');

// Signup
exports.signup = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const guestData = [
        req.body.fullName,
        req.body.email,
        req.body.phone,
        req.body.phoneCode,
        req.body.country,
        req.body.address
    ];

    const guestSql = "INSERT INTO Guest (FullName, Email, Phone, PhoneCode, Country, Address) VALUES (?)";
    db.query(guestSql, [guestData], (err, guestResult) => {
        if (err) return res.status(500).json({ error: "Error in Guest Registration" });

        const userSql = "INSERT INTO User (ID_Guest, UserName, Password) VALUES (?, ?, ?)";
        const userValues = [
            guestResult.insertId,
            req.body.username,
            hashedPassword
        ];

        db.query(userSql, userValues, (err) => {
            if (err) return res.status(500).json({ error: "Error in User Registration" });
            return res.json("Signup Success");
        });
    });
};

// Login
exports.login = (req, res) => {
    const sql = "SELECT * FROM User JOIN Guest ON User.ID_Guest = Guest.ID WHERE Guest.Email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if (err) return res.status(500).json({ error: "Error during login" });
        if (data.length > 0) {
            const validPassword = bcrypt.compareSync(req.body.password, data[0].Password);
            if (validPassword) {
                return res.json({ status: "Success", name: data[0].FullName });
            } else {
                return res.json("No record existed");
            }
        } else {
            return res.json("No record existed");
        }
    });
};
