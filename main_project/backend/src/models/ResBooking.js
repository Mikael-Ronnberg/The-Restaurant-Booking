const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  guest: {
    type: String,
    required: true,
  },
  guestEmail: { type: String, required: true },

  guestPhoneNum: { type: String, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
