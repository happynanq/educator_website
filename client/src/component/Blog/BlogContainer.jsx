import React, { useEffect } from 'react';
import Blog from './Blog';
import { blogApi } from '../../api/api';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
const BlogContainer = (props)=>{
  const [card, setCard] = useState(null)
  const {request,loading} = useHttp()
  const message=useMessage()
  useEffect(() => {
    const start = async()=>{
      try {
        const response = request("/api/blog/getCard","POST")
        const data = await response
        setCard(data.card)
      } catch (e) {
        e.map(e=>message(e))
      }
      
    }
    start()

      // blogApi.getAllArticles().then(res=>{
      //   
      //   // res.card, res.message
      //   setCard(res.card)
        
      // })
  }, []);
  console.log(props.match);
  
  return(
    <Blog card={card} loading={loading}/>
  )
}

export default compose(
  
  connect(null,{
    
  }),
  withRouter
)(BlogContainer)

// export default connect(null,{

// })(BlogContainer)