import React from "react";
import { reduxForm, Form, Field } from "redux-form";

const LoginForm = (props) => {
  const handleRestorePassword = (e)=>{
    e.preventDefault()
    console.log("WEWE");
  }
  return (
      <form className="col s12" onSubmit={props.handleSubmit}>

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

        <button className="btn">Войти</button>
        <button style={{marginLeft : 10 +"px"}} className="btn" onClick={handleRestorePassword}>Восстановить пароль</button>

      </form>
  );
};
const RegisterReduxForm = reduxForm({
  form:"register"
})(LoginForm) 

export default RegisterReduxForm