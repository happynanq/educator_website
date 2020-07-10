import React from 'react';
import { reduxForm, Field } from 'redux-form';

 const RegisterForm = (props)=>{
  
  // console.log("handleSubmit", props.handleSubmit );
  return(
    
      <form action="" className="col s12" onSubmit={props.handleSubmit }> 
        
        <div className="row">
          <div className="input-field col s11">
            <Field name="userName" id="userName" type="text" className="validate" component="input"/>
            <label htmlFor="userName">User Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s11">
            <Field name="email" id="email" type="email" className="validate" component="input"/>
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s11">
            <Field name="password" id="password" type="password" className="validate" component="input"/>
            <label htmlFor="password">Password</label>
          </div>
        </div>

        


        <button className="btn" disabled={props.loading}>Регистрация</button>
      </form>
  )
}
// !пробелма в редакс форме
const LoginReduxForm = reduxForm({
  form:"register"
})(RegisterForm)

export default LoginReduxForm