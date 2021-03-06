const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/user', async (req, res) => {
  const Users = await User.find();
  res.status(200).json({
    success: true,
    Users,
  });
});

router.post('/register', async (req, res) => {
  const Users = await User.create(req.body);
  res.status(201).json({
    success: true,
    Users,
  });
});

module.exports = router;
