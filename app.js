const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const { mongoURI } = require('./src/config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use(routes);
app.get('/', (req, res) => {
    res.send('Welcome to the Twitter-like backend system');
  });
  

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
