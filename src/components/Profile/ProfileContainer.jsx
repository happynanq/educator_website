import React from 'react'
import Content from './Profile';
import * as axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile, renderUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { witchAuthRedirect } from '../../hok/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component{

  componentDidMount(){
    let checkUserId = this.props.match.params.userId;
    console.log('checkUserId', checkUserId);
    this.props.renderUserProfile(checkUserId)
  }

  render(){
    return (
      <Content {...this.props} profile={this.props.profile}/>
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
  }
}
compose(
  connect(mapStateToProps,{
    setUserProfile,renderUserProfile
  }),
  withRouter,
  // witchAuthRedirect
)(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps,{
  setUserProfile,renderUserProfile
})(WithUrlDataContainerComponent)