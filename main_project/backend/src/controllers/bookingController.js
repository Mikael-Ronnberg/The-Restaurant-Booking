const mongoose = require("mongoose");

const Guest = require("../models/Guest");
const Booking = require("../models/Booking");
const Admin = require("../models/Admin");
const { tableStatus } = require(`../constants/table`);
const { NotFoundError, BadRequestError } = require("../utils/errors");

const bookingCollection = require("../models/Booking");

exports.getAllBookings = async (req, res) => {
  try {
    const booking = await Booking.find().populate("guest");
    //const guest = await Guest.find();
    console.log(booking);
    //console.log(guest);
    if (!booking) throw new NotFoundError("That booking does not exist");
    return res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*exports.getAllBookings = async (req, res) => {


    var booking =  {
      "_id":"$_id",
   };
  
      var result = await bookingCollection.aggregate([{
              $group:  {"_id":"$_id",}
          }, {
              $lookup: {
                  from: "Guest", // collection to join
                  localField: "_id",//field from the input documents
                  foreignField: "guest",//field from the documents of the "from" collection
                  as: "guest"// output array field
              }
          }, 
           ],);

      console.log (bookingCollection)

    if (!booking) throw new NotFoundError('That booking does not exist');
    return res.status(200).json(result);
  };*/

exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findById(bookingId);
    if (!booking) throw new NotFoundError("That booking does not exist");
    return res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

//remove?/if so also remove in routes
exports.getAllTables = async (req, res) => {
  try {
    const table = await Booking.find();
    if (!table) throw new NotFoundError("Could not find any tables");
    return res.json(table);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

//Needs to be fixed////

exports.getAvailableBookings = async (req, res) => {
  try {
    const { reservationDate } = req.query;

    const bookings = await Booking.find({ reservationDate });

    const availableTableNumbers = [];
    for (let i = 1; i <= 15; i++) {
      const tableAvailability = {
        tableNumber: i,
        firstSitting: false,
        secondSitting: false,
      };
      availableTableNumbers.push(tableAvailability);
    }

    bookings.forEach((booking) => {
      const { tableNumber, statusForTable } = booking;
      const tableAvailability = availableTableNumbers.find(
        (table) => table.tableNumber === tableNumber
      );

      if (statusForTable === tableStatus.FIRST_SITTING) {
        tableAvailability.firstSitting = true;
      } else if (statusForTable === tableStatus.SECOND_SITTING) {
        tableAvailability.secondSitting = true;
      }
    });

    return res.status(200).json({
      availableTableNumbers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

///

exports.createNewBooking = async (req, res) => {
  const {
      guestName,
      guestEmail,
      guestPhoneNum,
      reservationDate,
      reservationTime,
      partySize,
  } = req.body;

  try {
    if (!guestName || !guestEmail || !guestPhoneNum) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const tableCount = await Booking.countDocuments({
      reservationDate,
      reservationTime,
    });
    if (tableCount >= 30) {
      return res.status(400).json({ error: "Tables are full" });
    }

    const firstSittingCount = await Booking.countDocuments({
      reservationDate,
      reservationTime,
      // statusForTable: tableStatus.FIRST_SITTING,
    });
    const secondSittingCount = await Booking.countDocuments({
      reservationDate,
      reservationTime,
      // statusForTable: tableStatus.SECOND_SITTING,
    });

    // if (!statusForTable) {
    //   return res.status(400).json({ error: "You need to add a status" });
    // }

    // if (
    //   statusForTable !== tableStatus.FIRST_SITTING &&
    //   statusForTable !== tableStatus.SECOND_SITTING
    // ) {
    //   return res.status(400).json({ error: "Table status is invalid" });
    // }

    // if (statusForTable === "FIRST_SITTING" && firstSittingCount >= 15) {
    //   return res.status(400).json({ error: "Cannot add more bookings" });
    // }

    // if (statusForTable === "SECOND_SITTING" && secondSittingCount >= 15) {
    //   return res.status(400).json({ error: "Cannot add more bookings" });
    // }

    if (firstSittingCount >= 15 && secondSittingCount >= 15) {
      return res.status(400).json({ error: "Can not add more bookings" });
    }

    const availableTableNumber = await findAvailableTable(
      reservationDate,
      reservationTime,
      // statusForTable
    );
    if (!availableTableNumber) {
      return res
        .status(400)
        .json({ error: "No available tables for the requested sitting" });
    }

    const newGuest = await Guest.create({
      guestName: guestName,
      guestEmail: guestEmail,
      guestPhoneNum: guestPhoneNum,
    });

    console.log("Create booking...");

    const newBooking = await Booking.create({
      guest: newGuest._id,
      guestName: guestName,
      guestEmail: guestEmail,
      guestPhoneNum: guestPhoneNum,
      reservationDate: reservationDate,
      reservationTime: reservationTime,
      partySize: partySize,
    });

    const savedBooking = await newBooking.save();
    return res.status(201).json(savedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }

  async function findAvailableTable(
    reservationDate,
    reservationTime,
    statusForTable
  ) {
    const existingBookings = await Booking.find({
      reservationDate,
      reservationTime,
      statusForTable,
    });
    const bookedTableNumbers = existingBookings.map(
      (booking) => booking.tableNumber
    );

    for (let i = 1; i <= 15; i++) {
      if (!bookedTableNumbers.includes(i)) {
        return i;
      }
    }
  }
};

exports.updateBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    //const guestId = req.body.guestId;
    const newGuestName = req.body.guestName;
    const newGuestEmail = req.body.guestEmail;
    const newGuestPhoneNum = req.body.guestPhoneNum;
    const newReservDate = req.body.reservationDate;
    const newReservTime = req.body.reservationTime;
    const newPartySize = req.body.partySize;
    const newTableNumber = req.body.tableNumber;
    const newTableStatus = req.body.statusForTable;

    const booking = await Booking.findById(bookingId).populate("guest");
    if (!booking)
      throw new NotFoundError("Could not find reservation information");

    const guest = booking.guest;
    if (!guest) throw new NotFoundError("Could not find guest information");

    if (newGuestName) guest.guestName = newGuestName;
    if (newGuestEmail) guest.guestEmail = newGuestEmail;
    if (newGuestPhoneNum) guest.guestPhoneNum = newGuestPhoneNum;

    if (newReservDate) booking.reservationDate = newReservDate;
    if (newReservTime) booking.reservationTime = newReservTime;
    if (newPartySize) booking.partySize = newPartySize;
    if (newTableStatus) booking.statusForTable = newTableStatus;
    if (newTableNumber) booking.tableNumber = newTableNumber;

    await guest.save();
    const updatedBooking = await booking.save();

    return res.status(200).json(updatedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.deleteBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const bookToDelete = await Booking.findById(bookingId);
    if (!bookToDelete) throw new Error("Booking not found");

    await bookToDelete.deleteOne();
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
