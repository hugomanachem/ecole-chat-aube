import Navbar from "../components/Navbar";
import don_main_img from "../assets/faireUnDon/don_main_img.png";
import paypal_logo from "../assets/faireUnDon/paypal_logo.png";
import mastercard_logo from "../assets/faireUnDon/mastercard_logo.png";
import visa_logo from "../assets/faireUnDon/visa_logo.png";
import don_pourquoi_faire_un_don_img from "../assets/faireUnDon/don_pourquoi_faire_un_don_img.png";


function FaireUnDon() {
  return (
    <>
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

      <section className="secondary-bg-color second-section">
        <div className="second-section-body lefted">
          <div className="text-second-section">
            <h2>Pourquoi faire un don ?</h2>

            <p>
              Parce qu’en tant qu’association nous ne nous reposons que sûr les
              dons des entreprises et des particuliers pour vivre. En effet
              toutes nos charges sont supportées par les dons y compris la
              nourriture et l’eau que nous apportons à nos petits réfugiés à
              quatre pattes.
            </p>
            <p>
              L’avantage pour les particuliers est que votre don est déductible
              des impots !
            </p>
            <p>
              Et d’ailleurs un don ce n’est pas forcément de l’argent ! Vous
              pouvez aussi venir déposer des biens alimentaires tel que des
              boîtes de thon, de la paté pour chat et des croquettes directement
              chez nous.
            </p>
            <button className="primary-bg-color">Faire un don</button>
          </div>
        </div>

        <img
          src={don_pourquoi_faire_un_don_img}
          className="right-img-second-section"
        ></img>
      </section>

      <section id="don-video-section" className="primary-bg-color">
        <div id="don-video-body">
          <h2>Comment faire un don ?</h2>
          <p>
            On vous explique comment faire un don dans la vidéo juste en dessous
            :
          </p>
          <div id="don-video-btn">
            <iframe
              width="876"
              height="447"
              src="https://www.youtube.com/embed/iegTbDlr-ns"
              title="TUTO : COMMENT FAIRE UN DON ?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <button className="secondary-bg-color">Faire un don</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaireUnDon;
