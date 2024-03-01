import sushimi from "../assets/nosChats/sushimi.png";
import close_icon from "../assets/close_icon.png";

function ChatDetails() {
    function toggleChatDetails() {
        let chatDetailsElm = document.getElementById("chat-details-container");
        chatDetailsElm.classList.toggle("visible");
    }

  return (
    <>
      <section id="chat-details-container">
        <img onClick={toggleChatDetails} id="close-icon" src={close_icon} />
        <div id="chat-details-body">
          <div id="chat-main-infos">
            <h3>Sushimi</h3>
            <img src={sushimi} />
          </div>
          <div id="chat-detailed-infos">
            <p>
              <strong>Son âge :</strong> femelle née le 01/03/2021.{" "}
            </p>
            <p>
              <strong>Son histoire :</strong> arrivée sur un lieu de nourrissage
              « bi-quotidien » en fin d’été. Dès qu’un nouveau chat nous est
              signalé, nous intervenons, à fortiori quand c’est une femelle pour
              éviter la prolifération. Cette chatte est gentille, certainement «
              un abandon de vacances ».{" "}
            </p>
            <p>
              <strong>Son caractère :</strong> une « micro-chatte » jeune mais
              tranquille, discrète et sociable, encore un peu sur la réserve
              avec les humains. Elle apprécie les caresses et en redemande.{" "}
            </p>
            <p>
              <strong>Son avenir :</strong> en maison ou en appartement,
              sociable avec les autres chats.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChatDetails;
