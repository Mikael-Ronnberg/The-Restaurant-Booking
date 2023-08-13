const mongoose = require("mongoose");
const { tableStatus } = require("../constants/table");
const Schema = mongoose.Schema;
const Guest = require("../models/Guest");

const bookingSchema = new Schema(
  {
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
    },
    reservationDate: {
      type: String,
      required: true,
    },
    reservationTime: {
      type: String,
      required: true,
    },
    partySize: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
