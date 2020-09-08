import React, { useState, useEffect } from "react";
import "./App.css";
import { Sidebar } from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./components/Login/Login";

import { useStateValue } from "./ContextApi/StateProvider";

function App() {
  const [{ myMessages, user }, dispatch] = useStateValue();

  useEffect(() => {
    const getMessage = async () => {
      await axios.get(`/messages/${user.id}`).then((response) => {
        dispatch({
          type: "SET_MESSAGES",
          array: response.data,
        });
      });
    };

    if (user) {
      getMessage();
    }
  }, [user]);

  useEffect(() => {
    const pusher = new Pusher("4bccf108508cfaa75620", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      dispatch({
        type: "SET_MESSAGES",
        array: [...myMessages, data],
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [myMessages]);

  return (
    <div className="app">
      <Login />
      <div className="d-flex justify-content-center">
        <div className="row mt-4 app__body">
          <div className="col-lg-4 col-md-5">
            <Sidebar />
          </div>
          <div className="col-lg-8 col-md-7">
            <Chat messages={myMessages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
