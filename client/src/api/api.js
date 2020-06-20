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
    
  }
}
export const createTitle ={
  sendArticle(data){ // ? send data on "http://localhost:5000/api/create"
    let body = JSON.stringify(data)
    return fetch("http://localhost:5000/api/create/addCard",{
      ...configRequest,
      body
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data",data)
      return data
    })
  }
}

export const blogApi = {
  getAllArticles(){
    return fetch("http://localhost:5000/api/blog/getCard",{
      ...configRequest
    })
    .then(res=>res.json())
    .then(data=>{
      return data
    })
  }
}