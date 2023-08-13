import { BookingForm } from "../../components/BookingForm/BookingForm";
import { Footer } from "../../components/Footer/Footer";
import { Calendar } from "../../components/Icons/Calendar";
import { LineThrough } from "../../components/Icons/LineThrough";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Contact.scss";

export const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <>
        <main>
          <div className="hero-wrapper">
            <img
              src="/pexels-photo-6058230.webp"
              alt="Kitchen image"
              width="1000px"
              height="600"
              className="hero-img"
            />
          </div>
          <div className="title-container">
            <h2>Opening hours</h2>
            <div className="line-work">
              <LineThrough></LineThrough>
              <Calendar></Calendar>
              <LineThrough></LineThrough>
            </div>
          </div>
          <div className="opening-hours-container">
            <div className="opening-hours-day">
              <p>Monday-Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className="opening-hours-time">
              <p>17:00 - 00:00</p>
              <p>17:00 - 01:00</p>
              <p>13:00 - 01:00</p>
              <p>17:00 - 00:00</p>
            </div>
          </div>
          <h2>A Taste of France</h2>
          <div className="taste-of-france-text">
            <p>
              <em>
                In a corner of France, where flavors dance, Our French
                restaurant invites you to take a chance. Savor the elegance of
                gastronomy's art, Where culinary delights will capture your
                heart...
              </em>
            </p>
          </div>
        </main>
        <Footer></Footer>
      </>
    </>
  );
};
