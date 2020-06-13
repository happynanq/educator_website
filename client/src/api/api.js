import axios from "axios"

const instance = axios.create({
  baseURL:"http://localhost:5000/api/",
  withCredentials:true,
  'Access-Control-Allow-Origin': "*"
})

export const authApi ={
  sendLogin(formData){
    let {email, password} = formData
    // instance.post("auth/register",{
    //   email, password,
    //   // 'Access-Control-Allow-Origin': "*"
    // })
    let body = formData
    body=JSON.stringify(body)
    fetch("http://localhost:5000/api/auth/register",{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data: ",data)
    })
  },
  checkLogin(formData){
    let body = JSON.stringify(formData)
    fetch("http://localhost:5000/api/auth/login",{
      body,
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res=>res.json())
    .then(data=>{console.log("data",data)})
}
  }