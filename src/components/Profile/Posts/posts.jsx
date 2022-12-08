import React from 'react';
import Post from './Post/post';
import './posts.scss';
import avatar from '../../../img/avatar.jpg';
const Posts = (props) => {

  let PostElement = props.posts.map(post => <Post message={post.name} like={post.like} />);

  let newPost = React.createRef();

  let btnClick = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className="profile__posts">
      <div className="profile__posts-add cloud__container">
        <h2>Add new posts</h2>
        <div className="form">
          <div className="form__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="form__message">
            <textarea ref={newPost} name="add-post" placeholder="your news" value={props.newPostText} onChange={onPostChange} />
            <button className="post-btn" onClick={btnClick}>
              <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m578.93 269.92-415.52-207.65c-10.406-5.1992-22.762-4.6406-32.66 1.4727-9.8984 6.1133-15.93 16.91-15.945 28.543v124.54c0.027344 7.7031 2.6875 15.168 7.5352 21.152 4.8438 5.9883 11.59 10.145 19.121 11.777l134.4 30.238-134.4 30.238c-7.5312 1.6328-14.277 5.7891-19.121 11.777-4.8477 5.9844-7.5078 13.449-7.5352 21.152v124.54c0.015625 11.633 6.0469 22.43 15.945 28.543 9.8984 6.1133 22.254 6.6719 32.66 1.4727l415.52-206.53c4.5938-1.5117 7.6992-5.8008 7.6992-10.641 0-4.8359-3.1055-9.1289-7.6992-10.637z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      <div className="profile__posts-list cloud__container">
        <h2>My posts</h2>
        {PostElement}
      </div>
    </div>
  );
}

export default Posts;