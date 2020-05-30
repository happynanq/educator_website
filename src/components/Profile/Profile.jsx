import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Content = (props)=>{
  return (
    <div>
      {/* PROPS
      <div>
        {props.posts[0].message}
      </div>
      PROPS */}
      <ProfileInfo/>
      
      <MyPostsContainer store={props.store} state={props.state} profilePage = {props.profilePage} dispatch={props.dispatch}
      />
    </div>
  );
}

export default Content