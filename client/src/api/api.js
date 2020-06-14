import axios from "axios"

// const instance = axios.create({
//   baseURL:"http://localhost:5000/api/",
//   withCredentials:true,
//   'Access-Control-Allow-Origin': "*"
// })

const configRequest = {
  method:"POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}


export const authApi ={
  sendLogin(formData){ // !register
    let body = formData
    body=JSON.stringify(body)
    return fetch("http://localhost:5000/api/auth/register",{
      ...configRequest,
      body
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data",data)
      console.log("data.session", data.session)
      return data
    })
  },
  checkLogin(formData){ // !login
    let body = JSON.stringify(formData)
    return fetch("http://localhost:5000/api/auth/login",{
      ...configRequest,
      body
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data",data)
      console.log("data.session", data.session)
      return data
    })
    // .catch(e=>{
    //   console.error(e)
    //   throw e
    // })
  }
}