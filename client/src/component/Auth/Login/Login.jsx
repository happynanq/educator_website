import React from "react";
import LoginForm from "./LoginForm";
import { authApi } from "../../../api/api";
import { handleMessage } from "../handleMessages";
import { useHistory } from "react-router-dom";

// req on localhost 5000
const Login = (props) => {
  const history=useHistory()
  const handleSubmit = async(formData)=>{

    console.log("formDataRegister", formData);
    let toHandle = authApi.checkLogin(formData)
    handleMessage(toHandle)
    .then(data=>{
      debugger
      if(data === "error"){
        return
      }
      debugger
      props.loginUser(data.userId, data.token, )
      history.push("/")
    })

  }

  return (
    <div className="row">
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}/>
    </div>
  );
};
export default Login