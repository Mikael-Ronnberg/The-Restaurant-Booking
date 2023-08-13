const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },
    guestEmail: { type: String, required: true },

    guestPhoneNum: { type: String, required: true },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'bookingId',
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Guest', guestSchema);
