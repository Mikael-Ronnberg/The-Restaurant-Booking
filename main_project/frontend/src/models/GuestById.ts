export interface IGuestById {
    _id: string;
    guestName:string;
    guestEmail:string;
    guestPhoneNum:string;
    }
    
export interface IAllGuests {
    _id: string;
    guestName:string;
    guestEmail:string;
    guestPhoneNum:string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    }
    
export interface IUpdateGuest {
    _id:string;
    uestName:string;
    guestEmail:string;
    guestPhoneNum:string;
    updatedAt: string;
    }
    
    