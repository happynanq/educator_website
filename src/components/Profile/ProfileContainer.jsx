import React from 'react'
import Content from './Profile';
import * as axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component{

  componentDidMount(){
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
          this.props.setUserProfile(response.data);
          
        });
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
  setUserProfile
})(WithUrlDataContainerComponent)