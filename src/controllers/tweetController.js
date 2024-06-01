const tweetService = require('../services/tweetService');

const postTweet = async (req, res) => {
  try {
    const newTweet = await tweetService.postTweet(req.body, req.user);
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserTimeline = async (req, res) => {
  try {
    const timeline = await tweetService.getUserTimeline(req.params.userId);
    res.json(timeline);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  postTweet,
  getUserTimeline,
};