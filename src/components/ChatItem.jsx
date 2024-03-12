function ChatItem(props) {
  function openChatDetails() {
    props.callbackToSetCDImgSrc(props.img_src);
    props.callbackToSetCDName(props.chat_name);
    let chatDetailsElm = document.getElementById("chat-details-container");
    chatDetailsElm.classList.remove("visible");
  }
  return (
    <div
      onClick={() => openChatDetails()}
      className="chats-grid-item pointer-on-hover"
    >
      <img src={props.img_src} />
      <h4>{props.chat_name}</h4>
    </div>
  );
}

export default ChatItem;
