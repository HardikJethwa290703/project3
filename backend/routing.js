const express = require('express');
const {addUser,fetchUser} = require('./controller/controller.js');

const router = express.Router();

router.post('/',addUser);
router.post('/login',fetchUser);

module.exports = router;