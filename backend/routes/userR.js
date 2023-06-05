const express = require('express');
const router = express.Router();
const { registerUser, LoginUser, getMe } = require('../controllers/userC');
const protect = require('../middleware/authMiddleWare');

router.post('/', registerUser);
router.post('/login', LoginUser);
router.get('/me', protect, getMe);

module.exports = router;