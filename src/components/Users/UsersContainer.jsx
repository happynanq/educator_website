import { connect } from 'react-redux'
import { toggleFollowAC, setUsersAC } from '../../redux/usersReducer'
import Usersc from './Users'


let mapStateToProps = (state)=>{
  return{
    users: state.usersPage.users
  }
}


let mapDispatchToProps = (dispatch)=>{
  return{
    follow:(userId)=>{
      dispatch(toggleFollowAC(userId))
    },
    setUsers:(users)=>{
      dispatch(setUsersAC(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Usersc)
export default UsersContainer