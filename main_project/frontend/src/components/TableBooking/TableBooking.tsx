/* import { FormEvent, useState } from 'react';
import { CalendarForm } from '../Calendar/CalendarForm';
import './TableBooking.scss';
import { Navbar } from '../Navbar/Navbar';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const TableBooking = () => {
  const [guests, setGuests] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectetSitting, setSelectedSitting] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuests('');
    setSelectedDate(null);
    setSelectedSitting('');
  };

  const handleBooking = () => {
    const formData = {
      date: selectedDate,
      sitting: selectetSitting,
      guests: guests,
    };
    console.log(formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(e.target.value);
  };
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedSitting(time);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="arrowBack">
        <MdArrowBackIosNew />
        <a href="/">BACK</a>
      </div>
      <div className="title">
        <h2>BOOK A TABLE</h2>
      </div>
      <hr />
      <div className="calendar">
        <h3>Date and time</h3>
        <CalendarForm handleDateChange={handleDateChange}></CalendarForm>
      </div>
      <div className="sitting-btn">
        <button onClick={() => handleTimeSelection('18:00')}>18:00</button>
        <button onClick={() => handleTimeSelection('21:00')}>21:00</button>
      </div>

      <div className="guests">
        <form onSubmit={handleSubmit}>
          <input
            list="guests"
            value={guests}
            onChange={handleInputChange}
            placeholder="Number of guests"
          />
          <datalist id="guests">
            <option value="1 person" />
            <option value="2 people" />
            <option value="3 people" />
            <option value="4 people" />
            <option value="5 people" />
            <option value="6 people" />
            <option value="7 people" />
            <option value="8 people" />
            <option value="9 people" />
            <option value="10 people" />
            <option value="11 people" />
            <option value="12 people" />
          </datalist>
          <br />

          <button className="findTable-btn" onClick={handleBooking}>
            FIND A TABLE
          </button>
        </form>
      </div>
      <p className="info-txt">
        Please call or email Matkoma if your preferred time is not available or
        you have a larger party and we will do our very best to accommodate you.
      </p>
      <p>020 7636 1178</p>
      <p>reservations@matkoma.se</p>
      <Link to={'/bookingview'}>Ändra booking</Link>
    </>
  );
};
 */
