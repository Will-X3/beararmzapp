const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler'); // Import the errorHandler

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/bearhub', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// Routes
const articlesRoutes = require('./routes/articlesRoutes');
const videosRoute = require('./routes/videosRoute');
const reviewsRoute = require('./routes/reviewsRoute');
const chatHistoryRoute = require('./routes/chatHistoryRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute'); // Include user routes

// Use routes
app.use('/v1/bearhub/articles', articlesRoutes);
app.use('/v1/bearhub/videos', videosRoute);
app.use('/v1/bearhub/reviews', reviewsRoute);
app.use('/v1/bearhub/chat-history', chatHistoryRoute);
app.use('/v1/bearhub/users', userRoute);
app.use('/v1/bearhub/category', categoryRoute); // Use user routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
