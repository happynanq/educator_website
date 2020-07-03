import React from 'react'
import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/authReducer';
import {Login} from "./Login"
// import s from "./Login.module.css"
const LoginContainer = (props)=>{
  // const onSubmit = formData=>{
  //   console.log("formData",formData);
  //   props.loginUser(8563)
  // }
  return(
    <Login {...props}/>
  )
}
const mapStateToProps =()=>{
  return{}
}
export default connect(mapStateToProps,{
  loginUser
})(LoginContainer)