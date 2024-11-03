const express = require('express');
const router = express.Router();
const roomTypeController = require('../controllers/roomTypeController');

router.get('/room-types', roomTypeController.getRoomTypes);

module.exports = router;
