import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RegisterForm from './RegisterForm';
import { authApi } from '../../../api/api';
import { handleMessage } from '../handleMessages';


const Register = (props)=>{

  const onSubmit = (formData)=>{
    console.log("formDataRegister",formData);
    let toHandle = authApi.sendLogin(formData)
    handleMessage(toHandle)
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