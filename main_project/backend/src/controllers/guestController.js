const mongoose = require('mongoose');

const Guest = require('../models/Guest');
const Booking = require('../models/Booking');
const Admin = require('../models/Admin');
const { tableStatus } = require(`../constants/table`);
const { NotFoundError, BadRequestError } = require('../utils/errors');

exports.getAllGuest = async (req, res) => {
  try {
    const guest = await Guest.find();
    if (!guest) throw new NotFoundError('That guest does not exist');
    return res.status(200).json(guest);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getGuestById = async (req, res) => {
  try {
    const guestId = req.params.guestId;
    const guest = await Guest.findById(guestId);
    if (!guest) throw new NotFoundError('That guest does not exist');
    return res.status(200).json(guest);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateGuestById = async (req, res) => {
  try {
    const newReservDate = req.body.reservationDate;
    const newReservTime = req.body.reservationTime;
    const newPartySize = req.body.partySize;
    const newTableNumber = req.body.tableNumber;

    const guestId = req.params.guestId;
    const guest = await Guest.findById(guestId);
    if (!guest) throw new NotFoundError('That guest does not really exist');

    if (newReservDate) guest.reservationDate = newReservDate;
    if (newReservTime) guest.reservationTime = newReservTime;
    if (newPartySize) guest.partySize = newPartySize;
    if (newTableNumber) guest.tableNumber = newTableNumber;

    const updateGuest = await guest.save();

    return res.status(200).json(updateGuest);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
exports.deleteGuestById = async (req, res) => {
  try {
    const guestId = req.params.guestId;
    const guestToDelete = await Guest.findById(guestId);
    if (!guestToDelete) throw new Error('Guest not found');

    await guestToDelete.deleteOne();
    return res.status(200).json({ message: 'Guest deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
