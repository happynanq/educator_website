import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RegisterForm from './RegisterForm';
import { authApi } from '../../../api/api';


const Register = (props)=>{

  const onSubmit = formData=>{
    console.log("formData",formData);
    authApi.sendLogin(formData)
  }

  return(
    <div className="row">
    <h2>Register</h2>
      <RegisterForm onSubmit={onSubmit}/>
    </div>
  )
}
// !пробелма в редакс форме
export default Register