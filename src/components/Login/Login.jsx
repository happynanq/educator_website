import React from 'react'
import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/authReducer';
// import s from "./Login.module.css"
export const Login = (props)=>{
  const onSubmit = formData=>{
    console.log("formData",formData);
    props.loginUser(formData.login, formData.password)
  }
  return(
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
// const mapStateToProps =()=>{
//   return{}
// }
// export default connect(mapStateToProps,{
//   loginUser
// })(Login)