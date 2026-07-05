const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bus-management')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic Routes
app.get('/', (req, res) => {
  res.json({ message: 'Bus Management API Server Running' });
});

// Import Routes (will be created)
// const busRoutes = require('./routes/busRoutes');
// const routeRoutes = require('./routes/routeRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');
// const driverRoutes = require('./routes/driverRoutes');
// const userRoutes = require('./routes/userRoutes');

// Use Routes
// app.use('/api/buses', busRoutes);
// app.use('/api/routes', routeRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/drivers', driverRoutes);
// app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
