import { axiosReqMethods, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";



let initialState = {
      posts: [
        { message: "Hi, how are u? ", id: 1, likesCount: 13 },
        { message: "Nice social network ", id: 2, likesCount: 13 },
      ],
      newPostText: "abc",
      profile:null, 
      status:' '
    }

export const profileReducer = (state=initialState, action) => {
  let stateCopy= {...state} 

  switch (action.type) {
    case ADD_POST:

      const newPost = {
        message: state.newPostText,
        id: 3,
        likesCount: 0,
      };
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy
    
    case UPDATE_NEW_POST_TEXT:

      stateCopy.newPostText = action.newText;
      // this._callSubscribe(this.getState());
      return stateCopy

    case SET_USER_PROFILE:

      return{...state, profile:action.profile}

    case SET_STATUS:

      return{...state, status:action.status}
    default:

      return state
  }

};
export const setStatus = (status)=>{
  return{
    type:SET_STATUS,
    status
  }
}

export const changePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

export const renderUserProfile = (checkUserId)=>(dispatch)=>{
  axiosReqMethods.getAuthUserData()
    .then(res=>{
      let userId= res.data.id 
      userId = checkUserId ? checkUserId : userId

      axiosReqMethods.getProfilePage(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
      
        });
    })
}
export const getStatus = (userID)=>dispatch=>{
  // debugger
  console.log("userID",userID)
  profileAPI.getStatus(userID).then(res=>{
    dispatch(setStatus(res))
  })
} 

export const updateStatus = (status)=>dispatch=>{
  profileAPI.updateStatus(status).then(res=>{
    if(res.data.resultCode === 0 ){
      dispatch(setStatus(status))
    } 
  })
} 