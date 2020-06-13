import React from 'react';
import  Login  from './Login';
import { reduxForm } from 'redux-form';

 const LoginConteiner = (props)=>{
  
  return(
    <Login {...props} />
  )
}

export default LoginConteiner