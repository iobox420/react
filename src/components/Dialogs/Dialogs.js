import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    debugger;
    let dialogs = props.messagesPages.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>;
    });

    let messages = props.messagesPages.messagesData.map((mes) => {
        return <Message message={mes.message} id={mes.id}/>;
    });
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogs}
                <div className={s.dialog}></div>
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    {/* <textarea ref={newPostElement}> </textarea>*/}
                </div>
                <div>
                    {/*<button onClick={addPost}>Add post</button>*/}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
