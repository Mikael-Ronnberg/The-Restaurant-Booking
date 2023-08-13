import { Dispatch, createContext } from 'react';
import { IBooking } from '../models/IBooking';
import { IAction } from '../reducers/BookingReducer';

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
