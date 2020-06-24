import React, { useEffect } from 'react';
import Blog from './Blog';
import { blogApi } from '../../api/api';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
const BlogContainer = (props)=>{
  const [card, setCard] = useState(null)
  useEffect(() => {
      blogApi.getAllArticles().then(res=>{
        // res.card, res.message
        setCard(res.card)
        
      })
  }, []);
  console.log(props.match);
  
  return(
    <Blog card={card}/>
  )
}

export default compose(
  
  connect(null,{
    
  }),
  withRouter
)(BlogContainer)

// export default connect(null,{

// })(BlogContainer)