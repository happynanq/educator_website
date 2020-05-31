import { connect } from 'react-redux'
import { toggleFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReducer'
import * as axios from "axios";
import React from "react";
import Users from "./Users";


class UsersContainer extends React.Component {
 
  componentWillMount= ()=>{
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }

  onPageChanged= (pageNumber)=>{
    this.props.setCurrentPage(pageNumber)
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    return (
      <Users 
      totalUserCount={this.props.totalUserCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      follow = {this.props.follow}
      onPageChanged={this.onPageChanged}
      />
    )
  }
}



let mapStateToProps = (state)=>{
  return{
    users: state.usersPage.users,
    totalUserCount: state.usersPage.totalUserCount,
    pageSize: state.usersPage.pageSize,
    currentPage:state.usersPage.currentPage
  }
}


let mapDispatchToProps = (dispatch)=>{
  return{
    follow:(userId)=>{
      dispatch(toggleFollowAC(userId))
    },
    setUsers:(users)=>{
      dispatch(setUsersAC(users))
    },
    setCurrentPage:(pageNumber)=>{
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount:(totalCount)=>{
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)