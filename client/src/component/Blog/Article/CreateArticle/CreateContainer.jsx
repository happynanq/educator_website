import React from 'react';
import Create from './Create';
import { connect } from 'react-redux';
import { sendArticle } from '../../../../redux/createArticleReducer';

const CreateContainer = (props)=>{
  return (
    <Create {...props}/>
  )
}
export default connect(null, {
  sendArticle
})(CreateContainer)