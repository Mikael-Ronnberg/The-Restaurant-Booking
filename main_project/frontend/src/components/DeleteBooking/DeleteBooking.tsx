import "./DeleteBooking.scss"
import { useState } from 'react';
import axios from 'axios';
import { IBookingResponse } from '../../models/BookingResponseJS';
import Loader from "../../loader/Loader";
import { Navbar } from "../Navbar/Navbar";


export const DeleteBooking = () => {
  const [bookingId, setBookingId] = useState('');
  const [booking, setBooking] = useState<IBookingResponse>();
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [partySize, setPartySize] = useState(0);
  const [deleted, setDeleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFindBooking = async () => {
    if (bookingId.trim() === '') {
      setErrorMessage('Please enter a booking ID');
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/bookings/${bookingId}`
      );
      const bookingData = response.data;

      setBooking(bookingData);
      setPartySize(bookingData.partySize);
      setReservationDate(bookingData.reservationDate);
      setReservationTime(bookingData.reservationTime);
      setErrorMessage('');
      console.log(bookingData);
    } catch (error) {
      console.log('Error occurred while retrieving booking:', error);
      setErrorMessage('Error occurred while retrieving booking');
    }
  };

  const handleDeleteBooking = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`http://localhost:3000/api/v1/bookings/${bookingId}`);
      console.log('Booking deleted successfully');
      setDeleted(true);
      setBookingId(''); 
    } catch (error) {
      console.log('Error occurred while deleting booking:', error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleClick = () => {
    setDeleted(!deleted);
    console.log(deleted);
  };
  return (
    <>
    <Navbar></Navbar>
    
      <div className="deletePage">
        <p>Enter your booking ID</p>
        <input
          className="deleteInput"
          type="text"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
        />
        <button onClick={handleFindBooking}>Find booking</button>
  
        {errorMessage && <p>{errorMessage}</p>}
  
        {isLoading ? (
          <Loader /> 
        ) : booking && !deleted ? (
          <>
            <div>
              <p>Booking Details:</p>
              <div>Reservation Date: {booking.reservationDate}</div>
              <div>Reservation Time: {booking.reservationTime}</div>
              <div>Party Size: {booking.partySize}</div>
            </div>
            <button onClick={handleDeleteBooking}>Delete booking</button>
          </>
        ) : deleted ? (
          <>
            <div>Your booking was successfully deleted!</div>
            <button onClick={() => (window.location.href = '/')}>
              Go to Home Page
            </button>
          </>
        ) : null}
      </div>
    </>
  ); 

};