import { connect } from 'react-redux'
import {
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from '../../redux/usersReducer'
import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
 
  componentDidMount= ()=>{
    this.props.toggleIsFetching(true)
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          this.props.toggleIsFetching(false)

        });

  }

  onPageChanged= (pageNumber)=>{
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)

    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.toggleIsFetching(false)

        });

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
    isFetching : state.usersPage.isFetching
  }
}

//
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


export default connect(mapStateToProps, {
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)