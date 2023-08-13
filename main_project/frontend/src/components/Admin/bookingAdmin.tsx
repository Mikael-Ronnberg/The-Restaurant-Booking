import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./bookingAdmin.scss";
import { AdminService } from "../../services/admin.service";
import { INewBooking } from "../../models/NewBooking";


const startBooking = {
"guestName": "",
"guestEmail":"",
"guestPhoneNum": "",
"reservationDate":"",
"reservationTime":"18:00",
"partySize": 2,
"statusForTable": "FIRST_SITTING",
"tableNumber": 1
}




const startBooking2:INewBooking ={
"guestName": "Test nr 2",
"guestEmail":"testnr2@gmail.com",
"guestPhoneNum":"123456789",
"reservationDate": "06/23/2023",
"reservationTime": "21:00",
"statusForTable":"SECOND_SITTING",
"partySize": 4,
"tableNumber": 9
}




export default function BookingAdmin() {
//GDPR missing in Database
const [isGdpr, setIsGdpr] = useState(false);




const adminService = new AdminService();




const addBooking = async () => {
const response = await adminService.addBooking(inputs);
};


const [inputs, setInputs] = useState<INewBooking> (startBooking);


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
}


const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(inputs);


if (inputs.partySize > 6) {
    alert ("You tried to book "+inputs.partySize+" at a table. Maximum number of seats at one table is 6." + 
    " You are in the Admin tool so make more booking under the same name until you reach wanted siz of party.")
    inputs.partySize = 6
    setInputs(values => ({...values,"partySize": 6}))
};
    
if (inputs.reservationTime === "21:00") {
    inputs.statusForTable ="SECOND_SITTING"}

else if (inputs.reservationTime === "18:00") {
    inputs.statusForTable ="FIRST_SITTING"
}

else {
    inputs.statusForTable ="FIRST_SITTING"
    alert ("You tried to book a sitting at "+inputs.reservationTime+". The bookings are at 18:00 or 21:00.")};
    setInputs(values => ({...values,"reservationTime": "18:00"}));
    setInputs(values => ({...values,"statusForTable": "FIRST_SITTING"}));

addBooking()
alert ("You created a booking: "+inputs.reservationDate+", " +inputs.reservationTime+", with party size " 
+inputs.partySize+".")
setInputs(values => ({...values,"guestName": ""}));
setInputs(values => ({...values,"guestEmail": ""}));
setInputs(values => ({...values,"guestPhoneNum": ""}));
setInputs(values => ({...values,"partySize": 2}));
}


return (
<>
<div className="wrapper">

<form onSubmit ={handleSubmit}>
<h2>Admin | new booking</h2>


<label> Name:&nbsp;
<input
className="input"
type ="text"
value = {inputs.guestName}
name="guestName"
placeholder="Name..."
required
onChange = {handleChange}/>
</label>


<label> Mail:&nbsp;
<input
className="input"
type ="text"
value = {inputs.guestEmail}
name="guestEmail"
placeholder="eMail..."
required
onChange = {handleChange}/>
</label>


<label> Phone:&nbsp;
<input
className="input"
type ="text"
value = {inputs.guestPhoneNum}
name="guestPhoneNum"
placeholder="Phone number..."
required
onChange = {handleChange}/>
</label>

<label>
<p className="item">GDPR:
<input
className="input"
type ="checkbox"
name="Gdpr" checked = {isGdpr}
onChange = {() => setIsGdpr ((prev) => !prev)}/></p>
</label>


<label> Date:&nbsp;
<input
className="input"
type ="date"
value = {inputs.reservationDate}
name="reservationDate"
placeholder="Reservation date..."
required
onChange = {handleChange}/>
</label>


<label> Time:&nbsp;
<input
className="input"
type ="text"
value = {inputs.reservationTime}
name="reservationTime"
placeholder="Reservation time..."
required
onChange = {handleChange}/>
</label>


<label>
<input
className="input"
type ="hidden"
value = {inputs.statusForTable}
name="statusForTable"
placeholder="Status for table..."
required
onChange = {handleChange}/>
</label>

<label> Party #:&nbsp;
<input
className="input"
type ="number"
value = {inputs.partySize}
name="partySize"
placeholder="Party size..."
required
pattern="[0-9]*"
onChange = {handleChange}/>
</label>

<button
className = "bookAdminButton"
type="submit">Book</button>
<br></br>
<br></br>

</form>
</div>
</>
);
}





