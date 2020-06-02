

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
      users: [],
      totalUserCount:0,
      pageSize:5,
      currentPage:1,
      isFetching:false
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
    case TOGGLE_IS_FETCHING:
       return{
         ...state, isFetching  : action.isFetching 
       }
    default:
      console.log("[NoUserReducer]");
      return state;
  }

};
export const follow = ( userId) => {
  return {
    type: TOGGLE_FOLLOW,
    userId
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};
export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  };
};