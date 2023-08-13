import { Calendar } from "primereact/calendar";
import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./CalendarForm.scss";

interface CalendarFormProps {
  handleDateChange: (date: any) => void;
}

export const CalendarForm = ({ handleDateChange }: CalendarFormProps) => {
  const [date, setDate] = useState(new Date());

  const onChange = (e: { target: { value: any } }) => {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");

    setDate(selectedDate);
    handleDateChange(formattedDate);
  };

  return (
    <div className="card flex justify-content-center">
      <Calendar value={date} onChange={onChange} />
    </div>
  );
};
