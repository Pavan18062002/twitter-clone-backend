const Tweet = require('../models/tweetModel');

const postTweet = async (tweetData, user) => {
  const tweet = new Tweet({ ...tweetData, userId: user.userId });
  await tweet.save();
  return tweet;
};

const getUserTimeline = async (userId) => {
  const timeline = await Tweet.find({ userId }).sort({ createdAt: -1 });
  return timeline;
};

module.exports = {
  postTweet,
  getUserTimeline,
};