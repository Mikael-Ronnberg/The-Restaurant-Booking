import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-about">
          <h2>Contact</h2>
          <div className="contact-container">
            <div>
              <p>Phone: 020 7636 1178</p>
              <p>Email: reservations@matkoma.se</p>
              <p>
                Adress: Östermalm 1 <br /> 104 51 Stockholm
              </p>
            </div>
          </div>
        </section>
        <section className="footer-icons">
          <h2>Follow us</h2>
          <div>
            <a href="https://www.youtube.com/" className="classes.youtube">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/" className="classes.facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/" className="classes.twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" className="classes.instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
