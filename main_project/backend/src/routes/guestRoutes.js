const express = require('express');

const router = express.Router();

const {
  getAllGuest,
  getGuestById,
  updateGuestById,
  deleteGuestById,
} = require('../controllers/guestController');

//api/v1/guests
router.get('/', getAllGuest);

//api/v1/guests/:guestsById
router.get('/:guestId', getGuestById);

//api/v1/guests/:guestsById
router.put('/:guestId', updateGuestById);

//api/v1/guests/:guestsById
router.delete('/:guestId', deleteGuestById);

module.exports = router;
