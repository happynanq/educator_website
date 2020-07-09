const LOGIN_USER="LOGIN_USER"
const LOGOUT_USER="LOGOUT_USER"

const initialState = {
  token:null,
  userId:null,
  role : "User",
  storageName : "userData",
}

export const authReducer = (state=initialState, action)=>{
  switch (action.type) {
    case LOGIN_USER:
      
      return{
        ...state, token:action.token, userId:action.userId, role:action.role
      }
    case LOGOUT_USER:
        return{
          ...state, token:null, userId:null, role:"Unregister"
        }
    default:
      return state
  }
}
export const loginUser=(userId, token, role)=>{
  localStorage.setItem("userData",JSON.stringify({userId, token, role}))
  
  return{
    type:LOGIN_USER,
    userId, token, role
  }
}
export const logoutUser=()=>{
  localStorage.removeItem("userData")
  return{
    type:LOGOUT_USER,
    
  }
}




/*
export const createInit=(userId, token)=>{
  return{
    type:INITIAL_USER,
    userId, token
  }
}
*/