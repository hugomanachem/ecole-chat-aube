import Navbar from "../components/Navbar";
import chats_main_img from "../assets/nosChats/chats_main_img.png";
import sushimi from "../assets/nosChats/sushimi.png";
import melon from "../assets/nosChats/melon.png";
import tara from "../assets/nosChats/tara.png";
import pilou from "../assets/nosChats/pilou.png";
import nala from "../assets/nosChats/nala.png";
import sydney from "../assets/nosChats/sydney.png";
import tyger from "../assets/nosChats/tyger.png";
import rio from "../assets/nosChats/rio.png";
import lino from "../assets/nosChats/lino.png";
import harvey from "../assets/nosChats/harvey.png";
import saxo from "../assets/nosChats/saxo.png";
import simba from "../assets/nosChats/simba.png";
import melba from "../assets/nosChats/melba.png";

function NosChats() {
  return (
    <>
      <section className="primary-bg-color main-section">
        <Navbar bg_color="secondary" />
        <div className="main-section-content">
          <img
            id="border-radius-main-img"
            className="left-main-section-img"
            src={chats_main_img}
          ></img>
          <div className="main-section-h1-btn">
            <h1 className="tertiary-color">On vous présente nos chats</h1>
            <button className="secondary-bg-color tertiary-color">
              Découvrir nos chats
            </button>
          </div>
        </div>
      </section>

      <section id="chats-grid-section" className="secondary-bg-color">
        <div id="chats-grid-body">
          <div className="chats-grid-item">
            <img src={sushimi} />
            <h3>Sushimi</h3>
          </div>
          <div className="chats-grid-item">
            <img src={melon} />
            <h3>Melon</h3>
          </div>
          <div className="chats-grid-item">
            <img src={tara} />
            <h3>Tara</h3>
          </div>
          <div className="chats-grid-item">
            <img src={pilou} />
            <h3>Pilou</h3>
          </div>
          <div className="chats-grid-item">
            <img src={nala} />
            <h3>Nala</h3>
          </div>
          <div className="chats-grid-item">
            <img src={sydney} />
            <h3>Sydney</h3>
          </div>
          <div className="chats-grid-item">
            <img src={tyger} />
            <h3>Tyger</h3>
          </div>
          <div className="chats-grid-item">
            <img src={rio} />
            <h3>Rio</h3>
          </div>
          <div className="chats-grid-item">
            <img src={lino} />
            <h3>Lino</h3>
          </div>
          <div className="chats-grid-item">
            <img src={harvey} />
            <h3>Harvey</h3>
          </div>
          <div className="chats-grid-item">
            <img src={saxo} />
            <h3>Saxo</h3>
          </div>
          <div className="chats-grid-item">
            <img src={simba} />
            <h3>Simba</h3>
          </div>
          <div className="chats-grid-item">
            <img src={melba} />
            <h3>Melba</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default NosChats;
