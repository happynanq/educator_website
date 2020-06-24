import { blogApi } from "../api/api"

// const LOGIN_USER="LOGIN_USER"
const SET_TEXT_ARTICLE="SET_TEXT_ARTICLE"

const initialState = {
  text:""
  
}

export const blogReducer = (state=initialState, action)=>{
  switch (action.type) {
    case SET_TEXT_ARTICLE :
      return {
        ...state, text : action.text
      }
    
    default:
      return state
  }
}

export const setArticleText = (text)=>{
  return{
    type:SET_TEXT_ARTICLE,
    text
  }
}

export const getArticleText = (id)=> async(dispatch)=>{
  let text = await blogApi.GetArticleText(id)
  dispatch(setArticleText(text))
}


export const sendComment = (pageId, userId, text)=>dispatch=>{
  return blogApi.sendComment(pageId,userId, text )
}

export const getComment = (pageId, userId)=> async (dispatch)=>{
  return await blogApi.getComments(pageId,userId )
}




/*
export const createInit=(userId, token)=>{
  return{
    type:INITIAL_USER,
    userId, token
  }
}
*/
//export const clickToPage = (id)=>{
//   return{
//     type:CLICK_PAGE,
//     id
//   }
// }