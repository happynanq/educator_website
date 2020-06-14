import React from 'react';
import s from "./Header.module.css"
import { Link } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  // constructor(props){
  //   this.props = props
  // }
  componentDidMount(){
    let checkRegister = JSON.parse( localStorage.getItem("userData"))
    if(!checkRegister){
      return
    }
    let {userId, token}=checkRegister
    this.props.loginUser(userId, token)
  }
  render(){
    return(
      <Header {...this.props}/>
    )
  }
}
let mapStateToProps = (state)=>{
  return{
    userId:state.auth.userId,
    token:state.auth.token
  }
}
export  default connect(mapStateToProps,{
  logoutUser,
  loginUser
})(HeaderContainer)
