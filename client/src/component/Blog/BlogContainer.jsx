import React, { useEffect } from 'react';
import Blog from './Blog';
import { blogApi } from '../../api/api';
import { useState } from 'react';
const BlogContainer = ()=>{
  const [card, setCard] = useState(null)
  useEffect(() => {
      blogApi.getAllArticles().then(res=>{
        // res.card, res.message
        setCard(res.card)
        
        debugger
      })
  }, []);
  
  return(
    <Blog card={card}/>
  )
}
export default BlogContainer