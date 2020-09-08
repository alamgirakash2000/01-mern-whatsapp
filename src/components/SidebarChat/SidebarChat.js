import React, { useState, useEffect } from "react";
import "./SidebarChat.style.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../ContextApi/StateProvider";
import moment from "moment";

function SidebarChat({ user }) {
  const [lastMsg, setLastMsg] = useState("");
  const [{ myMessages, currentPeer }, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: "SET_PEER",
      peer: user,
    });
  };

  useEffect(() => {
    myMessages.map((msg) => {
      console.log("yesss");
      if (msg.sender === user.id || msg.receiver === user.id) {
        setLastMsg(msg);
      }
    });
  }, [myMessages]);

  return (
    <div
      onClick={handleClick}
      className={`sidebarChat d-flex align-items-center ${
        currentPeer?.id === user.id && "current bg-secondary text-white"
      }`}
    >
      <div className=" sidebarChat__avatar mr-3">
        <Avatar src="p" alt={user.name} />
      </div>
      <div className="sidebarChat__info">
        <h5 className="m-0 p-0">{user.name}</h5>
        <p className="m-0 p-0">
          {lastMsg.sender === user.id ? "You" : lastMsg.name} :{lastMsg.message}
        </p>
      </div>
      <div className="ml-auto">
        <small>
          {moment(parseInt(lastMsg.timestamp)).format("lll") || "just now"}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
