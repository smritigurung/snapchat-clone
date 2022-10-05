import React, { useState } from "react";
import "./AddFriend.css";
import { Link, useHistory } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import FriendsData from "./FriendsData";
import { v4 as uuid } from "uuid";

function AddFriend() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const friendId = uuid();
    let uniqueId = friendId.slice(0, 8); // it will give 8 digits

    FriendsData.push({ id: uniqueId, Name: name, Username: username });
    history.push("/friends/list");
  };

  return (
    <div className="add__friends__page">
      <div className="add__friends__header">
        <Link to="/">
          <KeyboardArrowDownIcon className="arrow__down" />
        </Link>
        <span className="add__friends__heading">Add Friends</span>
        <Link to="/friends/list">
          <PeopleOutlineRoundedIcon style={{ color: "black" }} />
        </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="add__form__name">
          <input
            required
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="add__form__username">
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="friend__btn">
          <button className="add__friend__btn">
            <PersonAddIcon style={{ fontSize: "15px" }} />
            <span style={{ fontWeight: "bold", cursor: "pointer" }}>Add</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFriend;
