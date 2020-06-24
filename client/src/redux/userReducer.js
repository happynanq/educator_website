import { blogApi, userApi } from "../api/api"

// const LOGIN_USER="LOGIN_USER"
const SET_USER_DATA="SET_USER_DATA"

const initialState = {
  name:"",
  mail:"",
  userId:""
  
}

export const userReducer = (state=initialState, action)=>{
  switch (action.type) {
    case SET_USER_DATA :
      return {
        ...state, ...action.userData
      }
    
    default:
      return state
  }
}

export const setUser=(userData)=>{
  return{
    type:SET_USER_DATA,
    userData
  }
}

export const setUserData = (userId)=> async(dispatch)=>{
  
  let data = await userApi.getUserData(userId)
  dispatch(setUser(data))
}

export const getUserName = (userId)=> async(dispatch)=>{
  return await userApi.getUserName(userId)
}




//export const clickToPage = (id)=>{
//   return{
//     type:CLICK_PAGE,
//     id
//   }
// }