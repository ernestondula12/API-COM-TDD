const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/user', createUser);

//router.post('/users', getUsers);



module.exports = router;