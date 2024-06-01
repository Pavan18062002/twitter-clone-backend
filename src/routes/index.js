const express = require('express');
const userRoutes = require('./userRoutes');
const tweetRoutes = require('./tweetRoutes');

const router = express.Router();

router.use('/api/users', userRoutes);
router.use('/api/tweets', tweetRoutes);

module.exports = router;
