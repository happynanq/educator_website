import * as axios from "axios"


const instance = axios.create({
  withCredentials: true,
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  headers:{'API-KEY' :'a193e949-454e-4c8e-9b19-4060ee788cb4'}
})


export const axiosReqMethods = {
  getUser(pageNumber, pageSize){
  return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
  .then(res=>{
    return res.data
  })
  },
  getAuthUserData(){
    return instance.get(`auth/me`)
      .then(res=> res.data)
  },
  getProfilePage(id){
    console.warn("Obsolete method. Use profileAPI ")
    return profileAPI.getProfilePage(id)
  },
  follow(userId){
    return instance.post(
      `follow/${userId}`,{},
      
    )
  
  },
  unfollow(userId){
    return instance.delete(
      `follow/${userId}`,
      
    )
    
  }
}
export const profileAPI = {
  getProfilePage(id){
    return instance.get(`profile/${id}`).then(res=>res.data)
  },
  getStatus(id){
    // console.log("id from api",id)
    return instance.get(`profile/status/${id}`).then(res=>{
      console.log('res.data',res.data)
      return res.data
    })
  },
  updateStatus(status){
    return instance.put(`profile/status`,{ status})
  }
}

export const authAPI = {
  loginUser(){
    return instance.post("auth/login")
  }
}