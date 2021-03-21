import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.js";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    debugger
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;
