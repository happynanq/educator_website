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
  },
  GetArticleText(id){
    let pageid = JSON.stringify({id})
    return fetch("http://localhost:5000/api/blog/getCurrentArticleText",{
      ...configRequest,
      body:pageid
    }).then(res=>res.json())
    .then(data=>{
      if(!data.title){
        return
      }
      return data.title.text
    })
  },
  sendComment(pageId, userId, text){
    let toBody = JSON.stringify({pageId,userId,text  })
    
    return fetch("http://localhost:5000/api/comment/create",{
      ...configRequest,
      body:toBody
    }).then(res=>res.json())
    .then(data=>{
      return data.message
    })
  },
  getComments(pageId, userId){
    let toBody = JSON.stringify({pageId,userId  })
    return fetch("http://localhost:5000/api/comment/get",{
      ...configRequest,
      body:toBody
    }).then(res=>res.json())
    .then(data=>{
      return data
    })
  }
}
export const userApi = {
  getUserName(userId){
    let toBody = JSON.stringify({userId  })
    return fetch("http://localhost:5000/api/user/getUser",{
      ...configRequest,
      body:toBody
    }).then(res=>res.json())
    .then(data=>{
      return data
    })
  }
}
export const ProfileApi = {
  changeUserData(userData,userId){
    
    let toBody = JSON.stringify({userId, userData  })
    
    return fetch("http://localhost:5000/api/profile/changeData",{
      ...configRequest,
      body:toBody
    }).then(res=>res.json())
    .then(data=>{
      return data
    })
  }
}
// /api/comment/get
// /api/comment/create