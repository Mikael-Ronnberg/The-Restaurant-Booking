export interface IUpdateBooking {
    reservationDate:string;
    reservationTime:string;
    partySize:number;
    statusForTable: string;
    tableNumber: number;
    _id:string;
    guest: {
        _id:string;
        guestName: string;
        guestEmail: string;
        guestPhoneNum: string;}
    }
    