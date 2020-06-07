import { connect } from 'react-redux'
import {
  unfollow,
  follow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers
} from '../../redux/usersReducer'
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {  axiosReqMethods } from '../../api/api';
import { compose } from 'redux';
import { witchAuthRedirect } from '../../hok/WithAuthRedirect';

class UsersContainer extends React.Component {
 
  componentDidMount= ()=>{
    this.props.getUsers(this.props.pageNumber, this.props.pageSize)
  }

  onPageChanged= (pageNumber)=>{
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
  }

  render() {
    return (
        <>
          {this.props.isFetching ?
              <Preloader/>
              : null}
          <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            onPageChanged={this.onPageChanged}
          />
          </>
    )
  }
}



let mapStateToProps = (state)=>{
  return{
    users: state.usersPage.users,
    totalUserCount: state.usersPage.totalUserCount,
    pageSize: state.usersPage.pageSize,
    currentPage:state.usersPage.currentPage,
    isFetching : state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress
  }
}


export default compose(
  connect(mapStateToProps, {
    follow,unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
  }),
  witchAuthRedirect)
  (UsersContainer)








  
// witchAuthRedirect()

// export default connect(mapStateToProps, {
//   follow,unfollow,
//   setCurrentPage,
//   toggleIsFollowingProgress,
//   getUsers
// })(UsersContainer)

// let mapDispatchToProps = (dispatch)=>{
//   return{
//     follow:(userId)=>{
//       dispatch(toggleFollowAC(userId))
//     },
//     setUsers:(users)=>{
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage:(pageNumber)=>{
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount:(totalCount)=>{
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching:(IsFetching)=>{
//       dispatch(toggleIsFetchingAC(IsFetching))
//     }
//   }
// }