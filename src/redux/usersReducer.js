const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"

let initialState = {
      users: [],
      totalUserCount:0,
      pageSize:2,
      currentPage:1
    }

export const usersReducer = (state=initialState, action) => {
  // let stateCopy= {...state} 

  switch (action.type) {
    case TOGGLE_FOLLOW:
      let a = action.userId;
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === a ? { ...u, followed: !u.followed } : u
        ),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUserCount: action.totalCount,
      };
    }
    default:
      console.log("[NoUserReducer]");
      return state;
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
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};
export const setUsersTotalCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  };
};