function ChatItem(props) {
    function toggleChatDetails() {
        let chatDetailsElm = document.getElementById("chat-details-container");
        chatDetailsElm.classList.toggle("visible");
    }
  return (
    <div onClick={toggleChatDetails} className="chats-grid-item">
      <img src={props.img_src} />
      <h4>{props.chat_name}</h4>
    </div>
  );
}

export default ChatItem;
