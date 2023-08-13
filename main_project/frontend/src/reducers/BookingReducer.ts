// import { IBookingResponse } from '../models/BookingResponseJS';
// import { IBooking } from '../models/IBooking';
// import { getAllBookings } from '../services/admin.service';

// export interface IAction {
//   type: ActionType;
//   payload: any;
// }

// export enum ActionType {
//   ADDED,
//   UPPDATED,
//   REMOVED,
//   GETALL,
// }

// export const BookingReducer = (booking: IBooking[], action: IAction) => {
//   switch (action.type) {
//     case ActionType.ADDED: {
//       return [
//         [...booking],
//         //  new IBooking(action.payload),
//       ];
//     }
//     case ActionType.GETALL: {
//       return action.payload;
//     }

//     case ActionType.UPPDATED: {
//       return action.payload;
//       // booking.map(booking =>);
//     }

//     case ActionType.REMOVED: {
//       return booking.filter((booking) => booking.bookingId !== action.payload);
//     }

//     default:
//       break;
//   }

//   return booking;
// };
