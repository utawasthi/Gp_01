const express = require('express');
const router = express.Router();
const {registerUser , loginUser} = require('../controllers/auth_controller');


router.post('/register' , registerUser);
router.get('/loginUser' , loginUser);

module.exports = router;