import React from 'react'
import Content from './Profile';
import * as axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile, renderUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { initialState } from '../../redux/authReducer';
import { axiosReqMethods } from '../../api/api';


class ProfileContainer extends React.Component{

  componentDidMount(){
    let checkUserId = this.props.match.params.userId;
    console.log('checkUserId', checkUserId);
    this.props.renderUserProfile(checkUserId)
    
    // axiosReqMethods.getAuthUserData()
    // .then(res=>{
    //   // console.log("HELLO");
    //   let userId= res.data.id 
    //   console.log(userId, 'userod');
    //   userId = checkUserId ? checkUserId : userId

    //   axiosReqMethods.getProfilePage(userId)
    //     .then((data) => {
    //         this.props.setUserProfile(data);
      
    //     });
    // })
  }

  render(){
    return (
      <Content {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps=(state)=>{
  return{
    profile:state.profilePage.profile
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps,{
  setUserProfile,renderUserProfile
})(WithUrlDataContainerComponent)