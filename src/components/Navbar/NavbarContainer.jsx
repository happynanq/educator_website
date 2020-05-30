
import { connect } from 'react-redux'
import Nav from './Navbar'





let mapStateToProps = (state)=>{
  return{
    friends : state.navbarPage.friends
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{

  }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)


export default NavContainer