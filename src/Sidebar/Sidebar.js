import React, { useState, useEffect } from "react";
import "./Sidebar.style.css";

import { Avatar, IconButton } from "@material-ui/core";
import { Message, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import SidebarChat from "../components/SidebarChat/SidebarChat";
import axios from "../axios";
import { useStateValue } from "../ContextApi/StateProvider";

export const Sidebar = () => {
  const [{ users, user }, dispatch] = useStateValue();
  const [searchInput, setSearchInput] = useState("");
  const [myUsers, setMyuUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      await axios.get("/users").then((res) => {
        dispatch({
          type: "SET_USERS",
          users: res.data.users
            .filter((u) => u.id !== user?.id)
            .filter((u) =>
              u.name.toLowerCase().includes(searchInput.trim().toLowerCase())
            ),
        });
      });
    };
    getAllUsers();
  }, [user, searchInput]);

  useEffect(() => {});

  return (
    <div className="sidebar">
      <div className="p-2 sidebar__header d-flex">
        <div className="mr-2">
          <Avatar src="ak" alt={user?.name} />
        </div>
        <h2 className="text-info">{user?.name}</h2>
        <div className="ml-auto">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Message />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search my-3">
        <Search />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search or start new chat"
          className="ml-3 search-input outline-none"
        />
      </div>
      <div className="sidebar__chats bg-white">
        {users?.map((user) => (
          <SidebarChat key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
