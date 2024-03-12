import Navbar from "../components/Navbar";
import volontaire_main_img from "../assets/devenirVolontaire/volontaire_main_img.png";
import volontaire_devenir_volontaire_img from "../assets/devenirVolontaire/volontaire_devenir_volontaire_img.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function DevenirVolontaire() {
  return (
    <>
      <section className="primary-bg-color main-section">
        <Navbar bg_color="secondary" />
        <div className="main-section-content">
          <div className="main-section-h1-btn">
            <h1 id="volontaire-main-title">On vous attend</h1>
            <Link to={"/volontaire/selection_horaire"}>
              <button className="secondary-bg-color tertiary-color pointer-on-hover">
                Devenir volontaire
              </button>
            </Link>
          </div>
          <img
            className="right-main-section-img"
            src={volontaire_main_img}
          ></img>
        </div>
      </section>

      <section className="secondary-bg-color second-section">
        <div className="second-section-body righted">
          <div
            id="volontaire-devenir-volontaire-text"
            className="text-second-section"
          >
            <h2 id="volontaire-devenir-volontaire-h2">Devenir volontaire</h2>
            <p>
              Être volontaire à L’école du chat de l’Aube, ça consiste en quoi ?
            </p>
            <p>
              Et bien ça consiste à venir, sur votre temps libre, câliner nos
              chats et chatons, jouer avec eux ou encore les nourrir sur les
              horaires d’ouverture de l’association.
            </p>
            <p>Comment devenir volontaire ? </p>
            <ul id="volontaire-devenir-volontaire-ul">
              <li>
                Cliquez sur le lien ci-dessous et choisissez le créneau qui est
                disponible sur lequel vous souhaitez venir rencontrer nos
                félins.
              </li>
              <li>Renseignez votre nom et prénom</li>
              <li>
                Et voilà ! Un mail de confirmation vous sera envoyé et vous
                pourrez venir sur le créneau séléctionné.
              </li>
            </ul>
            <Link to={"/volontaire/selection_horaire"}>
              <button className="primary-bg-color tertiary-color pointer-on-hover">
                Devenir volontaire
              </button>
            </Link>
          </div>
        </div>

        <img
          src={volontaire_devenir_volontaire_img}
          className="left-img-second-section"
        ></img>
      </section>

      <Footer bg_color="primary-bg-color" icons_color="yellow" />
    </>
  );
}

export default DevenirVolontaire;
