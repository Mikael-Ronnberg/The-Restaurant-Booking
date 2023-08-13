import axios from "axios";
import { IBookingResponse } from "../models/BookingResponseJS";
import { INewBooking } from "../models/NewBooking";
import { IGuestById, IAllGuests } from "../models/GuestById";
import { IUpdateBooking } from "../models/UpdateBooking";

export const getAllBookings = async () => {
  try {
    const response = await axios.get<IBookingResponse[]>(
      "http://localhost:3000/api/v1/bookings/"
    );

    return response.data;
  } catch {
    throw new Error("Could not get data from api");
  }
};

export class AdminService {
  public async addBooking(booking: any): Promise<any> {
    console.log(booking.guestEmail);
    const response = await axios.post("http://localhost:3000/api/v1/bookings", {
      guestName: booking.guestName,
      guestEmail: booking.guestEmail,
      guestPhoneNum: booking.guestPhoneNum,
      reservationDate: booking.reservationDate,
      reservationTime: booking.reservationTime,
      statusForTable: booking.statusForTable,
      partySize: booking.partySize,
      tableNumber: booking.tableNumber,
    });
    return response.data;
  }

  public async deleteBooking(id: string): Promise<any> {
    console.log(id);
    const response = await axios.delete(
      "http://localhost:3000/api/v1/bookings/" + id
    );
    return response.data;
  }

  public async deleteGuest(id: string): Promise<any> {
    console.log(id);
    const response = await axios.delete(
      "http://localhost:3000/api/v1/guests/" + id
    );
    return response.data;
  }

  public async getGuestById(id: string): Promise<any> {
    console.log(id);
    const response = await axios.get(
      "http://localhost:3000/api/v1/guests/" + id
    );
    return response.data.guestName;
  }

  public async getAllGuests(): Promise<IAllGuests[]> {
    const response = await axios.get("http://localhost:3000/api/v1/guests/");
    return response.data;
  }

  //Bara för test
  public async updateBooking(booking: IUpdateBooking): Promise<any> {
    const response = await axios.put(
      "http://localhost:3000/api/v1/bookings/" + booking._id,
      {
        reservationDate: booking.reservationDate,
        reservationTime: booking.reservationTime,
        partySize: booking.partySize,
        tableNumber: booking.tableNumber,
      }
    );
    return response.data;
  }
}

//export const addBooking = async () => {
// try {
// const response = await axios.post<IBookingResponse[]>(
// "http://localhost:3000/api/v1/bookings"
// );
// return response.data;
// } catch {
// throw new Error("Could not post data by api");
// }
// };
