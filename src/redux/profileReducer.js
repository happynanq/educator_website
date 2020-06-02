const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";



let initialState = {
      posts: [
        { message: "Hi, how are u? ", id: 1, likesCount: 13 },
        { message: "Nice social network ", id: 2, likesCount: 13 },
      ],
      newPostText: "abc",
      profile:null
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
      
    default:

      console.log("[NoProfileReducer]")
      return state
  }

};
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