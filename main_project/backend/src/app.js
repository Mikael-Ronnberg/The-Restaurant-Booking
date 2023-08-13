require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const bookingRoutes = require('./routes/bookingRoutes');
const guestRoutes = require('./routes/guestRoutes');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3000/api/v1/bookings/',
      'http://localhost:3000/api/v1/available-bookings',
      'http://localhost:5173',
      'http://localhost:5176',
      'http://localhost:5174',
    ],
    methods: ['GET', 'PUT', 'PATCH', 'DELETE', 'POST'],
  })
);

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/guests', guestRoutes);

const port = 3000;
const run = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);

    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

run();
