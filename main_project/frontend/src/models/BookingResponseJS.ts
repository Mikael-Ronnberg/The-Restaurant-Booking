export interface IBookingResponse {
  sitting: string;
  date: string | null;
  _id: string;
  tableNumber: number;
  statusForTable: string;
  reservationDate: string;
  reservationTime: string;
  partySize: number;
  guest: {
    _id: string;
    guestName: string;
    guestEmail: string;
    guestPhoneNum: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// export interface IBookingAddResponse {
//   guestName: string;
//   guestEmail: guestPhoneNum;
//   reservationDate;
//   reservationTime;
//   partySize;
//   statusForTable;
// }

// export interface IBookingResponse {
//   _id: string;
//   tableNumber: number;
//   statusForTable: string;
//   reservationDate: string;
//   reservationTime: string;
//   partySize: number;
//   guest: string;
//   guestName: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
//   }
