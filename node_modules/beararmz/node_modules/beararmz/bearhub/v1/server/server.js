const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler'); // Import the errorHandler


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/bearhub', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler);

// Routes
const articlesRoutes = require('./routes/articlesRoutes');
const videosRoute = require('./routes/videosRoute');
const reviewsRoute = require('./routes/reviewsRoute');
const chatHistoryRoute = require('./routes/chatHistoryRoute');
const userRoute = require('./routes/userRoute'); // Include user routes


// Use routes
app.use('/articles', articlesRoutes);
app.use('/videos', videosRoute);
app.use('/reviews', reviewsRoute);
app.use('/chathistory', chatHistoryRoute);
app.use('/users', userRoute); // Use user routes


// Default route
app.get('/', (req, res) => {
  res.send('Welcome to BearHub API');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


