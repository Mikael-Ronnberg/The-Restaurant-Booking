import { useContext } from "react";
import { IBooking } from "../../models/IBooking";
import { BookingContext } from "../../contexts/BookingContext";

interface IBookingViewProps {
  booking: IBooking;
}

export const BookingView = ({ booking }: IBookingViewProps) => {
  const dispatch = useContext(BookingContext);
  return (
    <div>
      <h3>{booking.reservationDate}</h3>
      <h3>{booking.reservationTime}</h3>
    </div>
  );
};
