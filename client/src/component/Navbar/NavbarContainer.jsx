import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';

 const NavbarContainer = (props)=>{
   
  return(
    <Navbar {...props}/>
  )
}

const mapStateToProps= (state)=>{
  return{
    role:state.auth.role
  }
}

export default connect(mapStateToProps)(NavbarContainer)