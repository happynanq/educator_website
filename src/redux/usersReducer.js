import { axiosReqMethods } from "../api/api"
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING"

let initialState = {
  users: [],
  totalUserCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
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
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
}
export const followSuccess = (userId) => {
  return {
    type: TOGGLE_FOLLOW,
    userId,
  };
}
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
}
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}
export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
}
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
}
export const toggleIsFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    isFetching,
    userId,
  };
}

export const getUsers = (pageNumber, pageSize) => (dispath) => {
  dispath(toggleIsFetching(true));

  axiosReqMethods.getUser(pageNumber, pageSize).then((data) => {
    dispath(setUsers(data.items));
    dispath(setTotalUsersCount(data.totalCount));
    dispath(toggleIsFetching(false));
  });
}

export const follow = (userId) => (dispath) => {

  dispath(toggleIsFollowingProgress(true, userId))
  axiosReqMethods
    .follow(userId)
    .then((response) => {
      console.log("follow", response.data.resultCode)

      if (response.data.resultCode === 0) {
        followSuccess(userId);
        toggleIsFollowingProgress(false, userId);
      }
    })
}

export const unfollow = (userId) => (dispath) => {
debugger
dispath(toggleIsFollowingProgress(true, userId))
axiosReqMethods
  .unfollow(userId)

  .then((response) => {

    if (response.data.resultCode === 0) {
      
      followSuccess(userId);
      toggleIsFollowingProgress(false, userId);
    }
  })

}
 