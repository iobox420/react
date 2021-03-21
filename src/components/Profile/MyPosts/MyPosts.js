import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
    let postsElements = props.postData.map((d) => {
        return <Post message={d.message} likesCount={d.likesCount} id={d.id}/>
    });

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
        
    };

    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value;
        /*console.log(text)  */
        props.updateNewPostText(text);
    }

    return (
        <div className="s.postsBlock">
            <div>
                <h1>My posts</h1>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
        ;
};
export default MyPosts
