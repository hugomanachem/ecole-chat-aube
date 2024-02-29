import Navbar from "../components/Navbar";
import don_main_img from "../assets/faireUnDon/don_main_img.png";
import paypal_logo from "../assets/faireUnDon/paypal_logo.png";
import mastercard_logo from "../assets/faireUnDon/mastercard_logo.png";
import visa_logo from "../assets/faireUnDon/visa_logo.png";

function FaireUnDon() {
  return (
    <section className="primary-bg-color main-section">
      <Navbar bg_color="secondary" />
      <div className="main-section-content">
        <img className="left-main-section-img" src={don_main_img}></img>
        <div className="main-section-h1-btn">
          <h1 className="tertiary-color">On compte sur vous</h1>
          <div id="don-container">
            <div id="don-btn-container">
              <button className="secondary-bg-color tertiary-color">
                Faire un don
              </button>
              <p>Paiement sécurisé</p>
            </div>
            <img src={paypal_logo}></img>
            <img src={visa_logo}></img>
            <img src={mastercard_logo}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaireUnDon;
