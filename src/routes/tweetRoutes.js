const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, tweetController.postTweet);
router.get('/:userId/timeline', tweetController.getUserTimeline);

module.exports = router;