import React from "react";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import { useMessage } from "../../../hooks/message.hook";

// req on localhost 5000
const Login = (props) => {
  const history=useHistory()
  const message = useMessage()
  const {request,loading, error} = useHttp()
  const handleSubmit = async(formData)=>{
    try {
      const response = request("/api/auth/login","POST",formData)
      const data = await response
      message(data.message)
      delete data.message
      props.loginUser(data.userId, data.token, data.role)
      history.push("/")

    } catch (e) {

      e.map(e=>message(e))
    }


    // console.log("formDataRegister", formData);
    // let toHandle = authApi.checkLogin(formData)
    // handleMessage(toHandle)
    // .then(data=>{
      
    //   if(data === "error"){
    //     return
    //   }
      
    //   props.loginUser(data.userId, data.token,data.role )
    // })

  }

  return (
    <>
      
      <div className="row">
        <h2>Login</h2>
        <LoginForm onSubmit={handleSubmit} loading={loading}/>
      </div>
    
    </>
  );
};
export default Login