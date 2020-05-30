const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
      users: [
        
      ]
    }

export const usersReducer = (state=initialState, action) => {
  // let stateCopy= {...state} 

  switch (action.type) {

    case TOGGLE_FOLLOW:
      let a = action.userId;
      return {
        ...state,
        users: state.users.map(u=> u.id === a ? {...u, followed: !u.followed} : u )
      } 
      
    case SET_USERS :

      return{
        ...state, users: [...state.users, ...action.users] 
      }
    default:

      console.log("[NoUserReducer]")
      return state
  }

};
export const toggleFollowAC = ( userId) => {
  return {
    type: TOGGLE_FOLLOW,
    userId
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  };
};