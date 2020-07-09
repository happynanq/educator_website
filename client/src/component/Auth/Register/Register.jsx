import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/message.hook';


const Register = (props)=>{
  const history = useHistory()
  const {request, loading,error} = useHttp()
  const message = useMessage()
  const onSubmit = async(formData)=>{
    try {
      console.log("formDataRegister",formData);
      const response = request("http://localhost:5000/api/auth/register","POST",formData)
      const data = await response
      message(data.message)
      // let toHandle = authApi.sendLogin(formData)

      // let a = await handleMessage(toHandle) 
      
      // if(a === "error"){
      //   return
      // }
      
      history.push('/auth/login')
    } catch (e) {
      e.map(e=>message(e))
    }
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