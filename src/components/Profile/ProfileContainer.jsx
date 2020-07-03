import React from 'react'
import Content from './Profile';
import * as axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile, renderUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { witchAuthRedirect } from '../../hok/WithAuthRedirect';
import { compose } from 'redux';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component{

  componentDidMount(){
    let checkUserId = this.props.match.params.userId
    let userId =   checkUserId ? checkUserId : 8563
    console.log('checkUserId', userId);
    this.props.renderUserProfile(checkUserId)
    this.props.getStatus(userId)
  }

  render(){

    return (
      <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatus}/>
    );
  }
}

// (props)=>{
//   if(!props.isAuth ){
//     return <Redirect to="/login" />
//   }
//   return <ProfileContainer {...props}/>
// }

let AuthRedirectComponent = witchAuthRedirect(ProfileContainer)







let mapStateToProps=(state)=>{
  return{
    profile:state.profilePage.profile,
    status:state.profilePage.status
  }
}

compose(
  connect(mapStateToProps,{
    setUserProfile,renderUserProfile, profileAPI
  }),
  withRouter,
  // witchAuthRedirect
)(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps,{
  setUserProfile,renderUserProfile,getStatus, updateStatus
})(WithUrlDataContainerComponent)