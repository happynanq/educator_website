import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router-dom';

const Content = (props)=>{
  
  return (
    <div>
      
      <ProfileInfo profile={props.profile} status={props.status} updateStatus ={props.updateStatus}/>
      
      <MyPostsContainer />
    </div>
  );
}

export default Content