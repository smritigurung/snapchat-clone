import React, { useEffect } from "react";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import "./App.css";
import ChatView from "./ChatView";
import { selectUser, login, logout } from "./features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
import FriendsList from "./Friends/FriendsList";
import AddFriend from "./Friends/AddFriend.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt=""
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route path="/friends/list">
                    <FriendsList />
                  </Route>
                  <Route path="/friends/add">
                    <AddFriend />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
