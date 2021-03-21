import React from "react";
import "./App.css";
/*init*/
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { updateNewPostText } from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs messagesPages={props.appstate.messagesPages} />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.appstate.profilePage}
                newPostText={props.appstate.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
