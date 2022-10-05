import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./FriendsList.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import FriendsData from "./FriendsData.js";

function FriendsList() {
  return (
    <div className="friends__list__page">
      <div className="friends__header">
        <Link to="/">
          <KeyboardArrowDownIcon className="arrow__down" />
        </Link>

        <span className="friends__heading">Friends</span>
        <MoreHorizIcon />
      </div>
      <div className="friends__search">
        <SearchIcon className="friends__searchIcon" />
        <input placeholder="Find Friends" type="text" />
      </div>
      <div className="my__stories">
        <div className="stories__title">My Stories</div>
        <Link to="/" className="add__story__link">
          <section className="add__stories">
            <CameraAltOutlinedIcon className="camera__icon" />{" "}
            <span>Add to My Story</span>
          </section>
        </Link>
      </div>

      <div className="my__friends">
        <div class="my__friends__title">My Friends</div>
        <Link to="/friends/add" className="add__friend__link">
          <div className="add__friends">
            <PersonAddOutlinedIcon className="add__friend__icon" />{" "}
            <span>Add Friends</span>
          </div>
        </Link>

        <div className="friends__section">
          {" "}
          <div className="friends__container">
            {FriendsData.map((friend) => {
              return (
                <div class="friend__row">
                  <Avatar className="friend__avatar" /> {friend.Name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsList;
