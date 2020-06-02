import React from 'react'
import s from './Post.module.css'

const Posts = (props)=>{
  return (
    <div className={s.item}>
      <img className={s.photo} src="https://www.meme-arsenal.com/memes/52b065ac2be8a907cfaecb71205fedd4.jpg" alt="AVA"/>
      <div>{props.message}</div>
      <div><p>like {props.likesCount}</p></div>
    </div>
  )
}

export default Posts