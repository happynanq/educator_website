import { createTitle } from "../api/api"

// const LOGIN_USER="LOGIN_USER"
const SEND_ARTICLE="SEND_ARTICLE"

const initialState = {
  link:"",
  text:"",
  img:""
}

export const createArticleReducer = (state=initialState, action)=>{
  switch (action.type) {
    case SEND_ARTICLE:
      debugger
      return{
        ...state
      }
    
    default:
      return state
  }
}
export const sendArticle = (data)=>{
  return{
    type:SEND_ARTICLE,
    data
  }
}
export const sendArticleAsync = (data) => (dispatch)=>{
  createTitle.sendArticle(data).then(res=>{
    dispatch(sendArticle(data))
  })
} 




/*
export const createInit=(userId, token)=>{
  return{
    type:INITIAL_USER,
    userId, token
  }
}
*/