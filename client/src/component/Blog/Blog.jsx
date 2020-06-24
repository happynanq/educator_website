import React from 'react';
import Card from './Card/Card';
const Blog = (props)=>{
    return(
    <>
      <div>Blogpage</div>
      <div className="container">
      {props.card ? props.card.map(e=><Card e={e}/>): <div>Тайтлов пока нет</div> }
        
      </div>
    </>
  )
}
export default Blog