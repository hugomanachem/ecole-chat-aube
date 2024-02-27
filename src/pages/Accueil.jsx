import Navbar from "../components/Navbar";
import main_section_img from "../assets/home_main_img.png";
import home_association_img from "../assets/home_association_img.png";
import home_buts_img from "../assets/home_buts_img.png";

function Accueil() {
  return (
    <>
      <section className="secondary-bg-color main-section">
        <Navbar />
        <div className="main-section-content">
          <div className="main-section-h1-btn">
            <h1 className="tertiary-color">L'école du chat de l'Aube</h1>
            <button className="primary-bg-color tertiary-color">
              En savoir plus
            </button>
          </div>
          <img src={main_section_img}></img>
        </div>
      </section>

      <section className="primary-bg-color second-section">
        <div className="second-section-content">
          <img src={home_association_img} className="radius-right"></img>
          <div className="second-section-h2-p">
            <h2 className="tertiary-color">L'association</h2>
            <div className="second-section-text">
              <p>
                Depuis 1999, l’École du Chat de l’Aube vient en aide aux chats
                errants et abandonnés du département, et notamment autour du
                secteur dit "Grand Troyes". Notre mission principale est la
                stérilisation et l’identification des chats errants. Nous
                prenons également en charge des chats adultes et des chatons
                sauvés des rues et les proposons à l’adoption.
              </p>
              <p>
                Nous disposons de trois locaux, mais devant le nombre important
                de chats à sauver, cela reste insuffisant et certains de nos
                protégés vivent en famille d’accueil. Nous avons besoin de
                bénévoles pour nous aider : pour entretenir les locaux, soigner
                les chats, organiser des manifestations ou des collectes, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-bg-color second-section">
        <div className="second-section-content">
          <div className="second-section-h2-p">
            <h2 className="tertiary-color">Nos buts</h2>
            <div className="second-section-text">
              <p>L'association poursuit les buts suivants :</p>
              <ul>
                <li>
                  identification par tatouage ou puce électronique,
                  stérilisation et vaccination des chats errants, nourrissage et
                  soins de ces chats « libres »
                </li>
                <li>défendre ces chats et améliorer leur existence</li>
                <li>
                  proposer à l'adoption ces chats, testés, tatoués, stérilisés
                  et vaccinés. 
                </li>
              </ul>
              <p>
                Par contre, notre refuge ne peut pas prendre en charge tous les
                chats errants.
              </p>
              <p>
                L'École du Chat de l'Aube a pour terrain d'action les communes
                de l'agglomération troyenne et du département.
              </p>
            </div>
          </div>
          <img src={home_buts_img} className="radius-left"></img>
        </div>
      </section>
    </>
  );
}

export default Accueil;
