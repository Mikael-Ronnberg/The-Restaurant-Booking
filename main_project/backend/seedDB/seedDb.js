require('dotenv').config();

const mongoose = require('mongoose');

const Booking = require('../src/models/ResBooking.js');

const { booking } = require('./mockdata/booking');

const populateDbWithMockData = async () => {
  try {
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    const bookingRes = await Booking.create(booking);

    console.log('Database successfully populated with funny items');

    return bookingRes;
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData();
