import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chats_main_img from "../assets/nosChats/chats_main_img.png";
import sushimi from "../assets/nosChats/sushimi.png";
import melon from "../assets/nosChats/melon.png";
import tara from "../assets/nosChats/tara.png";
import pilou from "../assets/nosChats/pilou.png";
import nala from "../assets/nosChats/nala.png";
import sydney from "../assets/nosChats/sydney.png";
import tiger from "../assets/nosChats/tiger.png";
import rio from "../assets/nosChats/rio.png";
import lino from "../assets/nosChats/lino.png";
import harvey from "../assets/nosChats/harvey.png";
import saxo from "../assets/nosChats/saxo.png";
import simba from "../assets/nosChats/simba.png";
import melba from "../assets/nosChats/melba.png";
import ChatItem from "../components/ChatItem";
import ChatDetails from "../components/ChatDetails";
import React from "react";

function NosChats() {
  let decouvrirChatsRef = React.useRef();
  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
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
            <h1>On vous présente nos chats</h1>
            <button
              className="secondary-bg-color tertiary-color pointer-on-hover"
              onClick={() => scrollTo(decouvrirChatsRef)}
            >
              Découvrir nos chats
            </button>
          </div>
        </div>
      </section>

      <section
        ref={decouvrirChatsRef}
        id="chats-grid-section"
        className="secondary-bg-color"
      >
        <div id="chats-grid-body">
          <ChatItem img_src={sushimi} chat_name="Sushimi" />
          <ChatItem img_src={melon} chat_name="Melon" />
          <ChatItem img_src={tara} chat_name="Tara" />
          <ChatItem img_src={pilou} chat_name="Pilou" />
          <ChatItem img_src={nala} chat_name="Nala" />
          <ChatItem img_src={sydney} chat_name="Sydney" />
          <ChatItem img_src={tiger} chat_name="Tiger" />
          <ChatItem img_src={rio} chat_name="Rio" />
          <ChatItem img_src={lino} chat_name="Lino" />
          <ChatItem img_src={harvey} chat_name="Harvey" />
          <ChatItem img_src={saxo} chat_name="Saxo" />
          <ChatItem img_src={simba} chat_name="Simba" />
          <ChatItem img_src={melba} chat_name="melba" />
        </div>
        <ChatDetails />
      </section>

      <Footer bg_color="primary-bg-color" icons_color="yellow" />
    </>
  );
}

export default NosChats;
