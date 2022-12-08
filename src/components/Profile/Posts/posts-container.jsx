import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReduser';
import Posts from './posts';
const PostsContainer = (props) => {
  let state = props.store.getState();

  let btnClick = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);

  };

  return (<Posts updateNewPostText={onPostChange}
    addPost={btnClick}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText} />);
}

export default PostsContainer;