import "./Booking.scss";
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { AvaliableBooking } from "../../components/AvailableBooking/AvaliableBooking";
import {
  BookingContext,
  IBookingContext,
  IDates,
  IPersonForm,
} from "../../contexts/BookingContext";
import { IBooking } from "../../models/IBooking";
import { BookingForm } from "../../components/BookingForm/BookingForm";
import { createNewBooking, getAllBookings } from "../../services/APIServices";
import { IBookingResponse } from "../../models/BookingResponseJS";


//import nodemailer from 'nodemailer';

/* const transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 'your-smtp-port',
  auth: {
    user: 'your-email',
    pass: 'your-password',
  },
}); */


export const Booking = () => {
  const [personForm, setPersonForm] = useState<IPersonForm>({
    firstName: "",
    telefon: "",
    email: "",
  });
  const [availableDates, setAvailableDates] = useState<IDates>({
    amountGuests: 0,
    bookingDate: "",
    whichSitting: "",
  });

  const [respId, setRespId] = useState("");

  const [availBookings, setAvailBookings] = useState<IBookingResponse[]>([]);

  const [bookings] = useState<IBookingContext>({
    allBookings: [],
    addBooking: (person: IPersonForm, datee: IDates) => {},
    getPersonInfo: (thisPerson: IPersonForm) => {
      setPersonForm(thisPerson);
    },
    getDatesAndSitting: (thisDateSitting: IDates) => {
      console.log(thisDateSitting);
      setAvailableDates(thisDateSitting);
      checkAvailableTables();
    },

    async getAllTheBookings() {
      try {
        let resp = await getAllBookings();
        setAvailBookings((prevBookings) => [...prevBookings, ...resp]);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    },
  });

  const [oneBooking, setOneBooking] = useState<IBookingResponse>()

  const [placeBooking, setPlaceBooking] = useState<IBooking>({
    guestFirstName: "",
    phoneNumber: "",
    emailAdress: "",
    partySize: 0,
    reservationDate: "",
    reservationTime: "",
  });

  const [showNotAvailable, setShowNotAvailable] = useState(true);
  const [isBookingAvailable, setIsBookingAvailable] = useState(false);
  const [successAvailable, setSuccessAvailable] = useState(false);

  useEffect(() => {}, [placeBooking]);

  const addToOneBooking = (person: IPersonForm, datee: IDates) => {
    setPlaceBooking({
      ...placeBooking,
      guestFirstName: person.firstName,
      emailAdress: person.email,
      phoneNumber: person.telefon,
      partySize: datee.amountGuests,
      reservationDate: datee.bookingDate,
      reservationTime: datee.whichSitting,
    });
  };

 /*  const sendBookingConfirmationEmail = (recipientEmail: string) => {
    const mailOptions = {
      from: 'your-email',
      to: recipientEmail,
      subject: 'Booking Confirmation',
      text: 'Thank you for your booking! Your reservation has been confirmed.',
    };

    transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }; */

  const handleAddBooking = async () => {
    addToOneBooking(personForm, availableDates);
    try {
  
      const response = await createNewBooking(placeBooking);

     // sendBookingConfirmationEmail(placeBooking.emailAdress); // Send the confirmation email

      console.log(response);
      setRespId(response._id);
      if (!respId) {
        setIsBookingAvailable(false);
        setShowNotAvailable(false);
        setSuccessAvailable(true)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkAvailableTables = async () => {
    const bookings = await getAllBookings();
    setAvailBookings(bookings);

    let temp: IBookingResponse[] = [];

    availBookings.forEach((book) => {
      if (
        availableDates.bookingDate === book.reservationDate &&
        availableDates.whichSitting === book.statusForTable
      ) {
        temp.push(book);
      }
    });

    console.log(temp);

    const tempSearchtSitting = temp.filter(
      (book) => availableDates.whichSitting === book.statusForTable
    );

    const numberAvailableSitting = 15 - tempSearchtSitting.length;

    const numberOfTablesNeeded = Math.ceil(availableDates.amountGuests / 6);

    console.log(numberAvailableSitting);

    if (numberOfTablesNeeded > numberAvailableSitting) {
      setIsBookingAvailable(false);
      setShowNotAvailable(true);
    } else {
      setShowNotAvailable(false);
      setIsBookingAvailable(true);
    }
    console.log(isBookingAvailable);
  };

  return (
    <>
      <Navbar></Navbar>
      <BookingContext.Provider value={bookings}>
      <div className="booking-wrapper">
         {showNotAvailable && <AvaliableBooking></AvaliableBooking>}
         {isBookingAvailable && <BookingForm></BookingForm>}

        {showNotAvailable && <button onClick={checkAvailableTables}>Check Available Tables</button>}
       {isBookingAvailable && <button onClick={handleAddBooking}>Add Your Booking!</button>}
        
        {successAvailable && <div className="success-window">
           <h3>Yay, your booking is placed!</h3>
           <p>Your booking ID is {respId}</p>
        </div>}


        </div>
      </BookingContext.Provider>

    </>
  )};
