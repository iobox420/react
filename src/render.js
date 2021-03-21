/*
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, {addPost, subscribe, updateNewPostText} from "./redux/state.js";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appstate={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />

        </BrowserRouter>,
        document.getElementById("root")
    );
};
rerenderEntireTree(state)
subscribe(rerenderEntireTree)*/
