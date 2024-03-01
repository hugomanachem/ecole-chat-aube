import Navbar from "../components/Navbar";
import chats_main_img from "../assets/nosChats/chats_main_img.png";

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
    </>
  );
}

export default NosChats;
