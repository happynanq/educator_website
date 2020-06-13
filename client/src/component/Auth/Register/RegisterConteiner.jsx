import React from 'react';
import  Register  from './Register';
import { compose } from 'redux';
import { connect } from 'react-redux'


const RegisterContainer = (props)=>{
  return(
    <Register {...props}/>
  )
}

const mapStateToProps = state=>{
  return{
    
  }
}

export default connect(mapStateToProps, {

})(RegisterContainer)