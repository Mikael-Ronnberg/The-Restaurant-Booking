import axios from "axios";
import { IBookingResponse } from "../models/BookingResponseJS";
import { IBooking } from "../models/IBooking";

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

export const deleteBookingById = async (id: string) => {
  try {
    const response = await axios.delete<IBookingResponse[]>(
      "http://localhost:3000/api/v1/bookings/" + id
    );
    return response.data;
  } catch {
    throw new Error("Could not get data from api");
  }
};

export const getBookingById = async (id: string) => {
  try {
    const response = await axios.get<IBookingResponse[]>(
      "http://localhost:3000/api/v1/bookings/" + id
    );
    return response.data;
  } catch {
    throw new Error("Could not get data from api");
  }
};

export const getBookingByDate = async (
  date: string
): Promise<IBookingResponse[]> => {
  try {
    const response = await axios.get<IBookingResponse[]>(
      "http://localhost:3000/api/v1/available-bookings?reservationDate=" + date
    );
    return response.data;
  } catch {
    throw new Error("Could not get data from api");
  }
};

export const getAllTables = async (id: string) => {
  try {
    const response = await axios.get<IBookingResponse[]>(
      `http://localhost:3000/api/v1/bookings/ ${id}`
    );
    return response.data;
  } catch {
    throw new Error("Could not get data from api");
  }
};

export const createNewBooking = async (booking: IBooking): Promise<IBookingResponse> => {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/bookings", {
      guestName: booking.guestFirstName,
      guestEmail: booking.emailAdress,
      guestPhoneNum: booking.phoneNumber,
      reservationDate: booking.reservationDate,
      reservationTime: booking.reservationTime,
      partySize: booking.partySize
    });

    return response.data;
  } catch (error){
    throw new Error("Could not post data to api:");
  }
};

export const updateBookingById = async (id: string) => {
  try {
    const response = await axios.put<IBookingResponse[]>(
      "http://localhost:3000/api/v1/bookings/" + id
    );
    return response.data;
  } catch {
    throw new Error("Could not update data to api");
  }
};
