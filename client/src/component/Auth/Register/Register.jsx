import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RegisterForm from './RegisterForm';
import { authApi } from '../../../api/api';
import { handleMessage } from '../handleMessages';
import { useHistory } from 'react-router-dom';


const Register = (props)=>{
  const history = useHistory()
  const onSubmit = async(formData)=>{
    console.log("formDataRegister",formData);
    let toHandle = authApi.sendLogin(formData)
    let a = await handleMessage(toHandle) 
    debugger
    if(a === "error"){
      return
    }
    
    history.push('/auth/login')
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