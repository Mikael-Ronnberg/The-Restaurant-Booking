import { Dispatch, createContext } from "react";
import { IBookingResponse } from "../models/BookingResponseJS";
import { IBooking } from "../models/IBooking";

export interface IBookingContext {
  allBookings: IBooking[];
  addBooking: (aBPerson: IPersonForm, aDate: IDates) => void;
  getPersonInfo: (aPerson: IPersonForm) => void;
  getDatesAndSitting: (datesSitting: IDates) => void;
  getAllTheBookings: () => void;
}

export interface IPersonForm {
  firstName: string;
  telefon: string;
  email: string;
}

export interface IDates {
  amountGuests: number;
  bookingDate: string;
  whichSitting: string;
}

export const BookingContext = createContext<IBookingContext>({
  allBookings: [],
  addBooking: (aBPerson: IPersonForm, aDate: IDates) => {
    return;
  },
  getPersonInfo: (aPerson: IPersonForm) => {
    return;
  },
  getDatesAndSitting: (datesSitting: IDates) => {
    return;
  },
  getAllTheBookings: () => {
    return;
  },
});
