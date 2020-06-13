import React from "react";
import LoginForm from "./LoginForm";
import { authApi } from "../../../api/api";
//
// req on localhost 5000
 const Login = (props) => {
  const handleSubmit = (formData)=>{
    console.log("HELLOW FROM LOGIN!!!", formData);
    authApi.checkLogin(formData)
  }

  return (
    <div className="row">
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}/>
    </div>
  );
};
export default Login