import "./AvaliableBooking.scss";
import { FormEvent, useContext, useState } from "react";
import { CalendarForm } from "../Calendar/CalendarForm";
import { Link } from "react-router-dom";
import { IBookingResponse } from "../../models/BookingResponseJS";
import { BookingContext, IDates } from "../../contexts/BookingContext";

export const AvaliableBooking = () => {
  const [bookings, setBookings] = useState<IBookingResponse[]>([]);
  const [thisDates, setThisDates] = useState<IDates>({
    amountGuests: 0,
    bookingDate: "",
    whichSitting: "",
  });

  const { getDatesAndSitting } = useContext(BookingContext);
  const [searchDate, setSearchDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getDatesAndSitting(thisDates);
    setThisDates({
      ...thisDates,
      amountGuests: 0,
      bookingDate: "",
      whichSitting: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThisDates({
      ...thisDates,
      amountGuests: +e.target.value,
    });
    console.log(thisDates);
  };
  const handleDateChange = async (date: string) => {
    setThisDates({
      ...thisDates,
      bookingDate: date,
    });
    console.log(thisDates);
  };

  // bookingController / getAvailableBookings logik
  const handleTimeSelection = (sitting: string) => {
    setThisDates({
      ...thisDates,
      whichSitting: sitting,
    });
    console.log(thisDates);
  };

  return (
    <>
      <div className="available-form">
        <div className="title">
          <h2>BOOK A TABLE</h2>
        </div>
        <hr />
        <div className="calendar">
          <h3>Date and time</h3>
          <CalendarForm handleDateChange={handleDateChange}></CalendarForm>
        </div>
        <div className="sitting-btn">
          <button onClick={() => handleTimeSelection("18:00")}>18:00</button>
          <button onClick={() => handleTimeSelection("21:00")}>21:00</button>
        </div>

        <div className="guests">
          <form onSubmit={handleSubmit}>
            <input
              list="guests"
              value={thisDates.amountGuests}
              onChange={handleInputChange}
              placeholder="Number of guests"
            />
            <datalist id="guests">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
              <option value="7" />
              <option value="8" />
              <option value="9" />
              <option value="10" />
              <option value="11" />
              <option value="12" />
            </datalist>
            <br />
            <div className="button-wrapper">
              <button className="findTable-btn">
                <Link to={"/deleteBooking"}>FIND YOUR BOOKING</Link>
              </button>
              <button className="findTable-btn" onClick={() => handleSubmit}>
                FIND A TABLE
              </button>
            </div>
          </form>
        </div>
        <p className="info-txt">
          Please call or email Matkoma if your preferred time is not available
          or you have a larger party and we will do our very best to accommodate
          you.If you wish to change your reservation, please click on the button
          below.
        </p>
        <p>020 7636 1178</p>
        <p>reservations@matkoma.se</p>
      </div>

      {/* {isBookingAvailable && <div className="all-available-bookings"></div>}

      {showNotAvailable && (
        <div>
          <p>
            There seems to be no available bookings at this date! Please try
            again or go somewhere else!
          </p>
        </div>
      )} */}
    </>
  );
};
