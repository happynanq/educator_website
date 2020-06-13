import React from 'react';
import  Login  from './Login';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/authReducer';

 const LoginConteiner = (props)=>{
  
  return(
    <Login {...props} />
  )
}

let mapStateToProps = (store)=>{
  
}
export default connect(mapStateToProps, {
  loginUser
})(LoginConteiner)