const express = require("express");

const router = express.Router();

const {
  getAllBookings,
  getBookingById,
  getAllTables,
  getAvailableBookings,
  createNewBooking,
  updateBookingById,
  deleteBookingById,
} = require("../controllers/bookingController");

//api/v1/bookings
router.get("/", getAllBookings);

//api/v1/bookings
router.get("/", getAllTables);

//api/v1/bookings/:tableStatus'//:reservationDate/:statusForTable
router.get(
  "/available-bookings/:reservationDate/:reservationTime",
  getAvailableBookings
);

//api/v1/bookings/:bookingId

router.get("/:bookingId", getBookingById);

//api/v1/bookings
router.post("/", createNewBooking);

router.put(
  "/:bookingId",

  updateBookingById
);

//api/v1//bookings/:bookingId'
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
