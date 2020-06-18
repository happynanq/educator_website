import React from 'react';
import Create from './Create';
import { connect } from 'react-redux';

const CreateContainer = ()=>{
  return (
    <Create/>
  )
}

export default connect(null, {
  
})(CreateContainer)