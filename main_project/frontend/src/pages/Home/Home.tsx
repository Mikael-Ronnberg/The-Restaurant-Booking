import { Footer } from "../../components/Footer/Footer";
import { AvocadoLeft } from "../../components/Icons/AvocadoLeft";
import { AvocadoRight } from "../../components/Icons/AvocadoRight";
import { Calendar } from "../../components/Icons/Calendar";
import { LineThrough } from "../../components/Icons/LineThrough";
import { Lines } from "../../components/Icons/Lines";
import { Navbar } from "../../components/Navbar/Navbar";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="main-container">
        <div className="hero-wrapper">
          <img
            src="/IMG_9706___media_library_original_2822_1881.jpg"
            alt="Kitchen image"
            width="1000px"
            height="600"
            className="hero-img"
          />
        </div>
        <Lines></Lines>
        <div className="sections-wrapper">
          <section className="restaurant-section">
            <h2>Our restaurant</h2>
            <section>
              <p>
                Indulge in the extraordinary flavors of authentic French cuisine
                at our restaurant. Our culinary team is dedicated to bringing
                you an exquisite dining experience, showcasing the artistry and
                elegance of French gastronomy. From classic dishes like Coq au
                Vin and Escargots de Bourgogne to delicate pastries like Crème
                Brûlée and Tarte Tatin, every bite is a journey through the rich
                culinary traditions of France. Complementing our culinary
                delights, we offer an extensive selection of French wines,
                meticulously chosen to enhance your dining pleasure. Join us and
                savor the unparalleled sophistication and charm of French
                cuisine in a warm and inviting atmosphere.
                <br />
                <br />
                /Team Matkoma
              </p>
            </section>
          </section>
          <section className="wine-section">
            <h2>Our organic vines</h2>
            <section>
              <p>
                Indulge in our exceptional wine selection, predominantly
                featuring exquisite French wines. We take pride in offering a
                curated collection of wines that perfectly complement our French
                and Mediterranean cuisine. From elegant Bordeaux blends to crisp
                Burgundian whites, our sommeliers have meticulously handpicked
                each bottle to ensure an exceptional wine experience. Immerse
                yourself in the rich history and renowned craftsmanship of
                French winemaking as you explore our exclusive wine list.
                Whether you're a connoisseur or a wine enthusiast, our expertly
                selected wines will elevate your dining experience to new
                heights.
              </p>
            </section>
          </section>
        </div>
        <Lines></Lines>

        <div className="sections-wrapper">
          <section className="restaurant-section">
            <section>
              <h2>Menu</h2>

              <h4>Entrées (Appetizers)</h4>
              <ul>
                <li>Escargots de Bourgogne - Snails in garlic butter</li>
                <li>Pâté de Campagne - Country-style pâté</li>
                <li>Salade Niçoise - Niçoise salad</li>
              </ul>

              <h4>Plats Principaux (Main Courses)</h4>
              <ul>
                <li>Coq au Vin - Chicken braised in red wine</li>
                <li>Boeuf Bourguignon - Beef stew in red wine</li>
                <li>Ratatouille - Vegetable stew</li>
              </ul>

              <h4>Fromages (Cheeses)</h4>
              <ul>
                <li>Brie de Meaux - Soft cow's milk cheese</li>
                <li>Roquefort - Blue cheese</li>
                <li>Comté - Hard cheese</li>
              </ul>
            </section>
          </section>
          <section className="wine-section">
            <section>
              <>
                <h2>Desserts</h2>
                <ul>
                  <li>Crème Brûlée - Burnt cream</li>
                  <li>Tarte Tatin - Upside-down caramelized apple tart</li>
                  <li>Profiteroles - Choux pastry filled with ice cream</li>
                </ul>
              </>

              <h2>Our Vines</h2>
              <ul>
                <li>Ratatouille - Paired with Côtes du Rhône or Grenache</li>
                <li>Brie de Meaux - Paired with Champagne or Chardonnay</li>
                <li>Comté - Paired with Riesling or Gewürztraminer</li>
                <li>Crème Brûlée - Paired with Muscat or Late Harvest</li>
                <li>Profiteroles - Paired with Banyuls or Tawny Port</li>
              </ul>
            </section>
          </section>
        </div>
        <Lines></Lines>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
