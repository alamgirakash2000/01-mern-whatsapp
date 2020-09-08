import React, { useState, useEffect } from "react";
import "./Chat.style.css";
import { Avatar, IconButton } from "@material-ui/core";
import bg from "./bg.jpg";
import moment from "moment";
import {
  Search,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Send,
} from "@material-ui/icons";
import axios from "../axios";
import { useStateValue } from "../ContextApi/StateProvider";

const Chat = () => {
  const [{ user, currentPeer, myMessages }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState();

  useEffect(() => {
    setMessages(
      myMessages.filter(
        (msg) =>
          msg.sender === currentPeer?.id || msg.receiver === currentPeer?.id
      )
    );
  }, [currentPeer, myMessages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: user.name,
      timestamp: moment(),
      receive: false,
      sender: user.id,
      receiver: currentPeer.id,
    });

    dispatch({
      type: "SET_MESSAGES",
      array: [
        ...myMessages,
        {
          message: input,
          name: user.name,
          timestamp: moment(),
          receive: false,
          sender: user.id,
          receiver: currentPeer.id,
        },
      ],
    });

    setInput("");
  };

  return (
    <div className="container chat  py-3">
      <div className="chat__header d-flex align-items-center">
        <Avatar src="A" alt={currentPeer?.name} />
        <div className="chat__headerInfo ml-3">
          <h4 className="m-0 p-0">{currentPeer?.name}</h4>
          <p className="m-0 p-0">Last seen at...</p>
        </div>
        <div className="row ml-auto">
          <div className="chat__headerRight ml-auto">
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="chat__body">
        {messages?.map((message) => (
          <p
            key={message.id}
            className={`message ${message.sender === user.id && "own-message"}`}
          >
            <h6 className="m-0 p-0">{message.message}</h6>
            <small className="chat__timestamp m-0 ml-auto">
              <i>
                {moment(parseInt(message.timestamp)).format("LT") || "Just now"}
              </i>
            </small>
          </p>
        ))}
      </div>

      <div className="mt-auto">
        <form
          onSubmit={sendMessage}
          className="chat__footer d-flex justify-content-center align-items-center"
        >
          <InsertEmoticon />
          <input
            className="outline-none form-control"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit" className={`send-button ${!input && "d-none"}`}>
            <Send />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
