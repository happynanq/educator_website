import React from 'react'
import { Link } from 'react-router-dom'
import s from "./Navbar.module.css"
 const Navbar = (props)=>{
  return(
    <nav className={s.navigation}>
      <div>
        <Link to="#">Главная страница</Link>
      </div>
      <div>
        <Link to="/blog">Блог</Link>
      </div>
      <div>
        <Link to="/create/article">Добавить статью</Link>
      </div> 
      <div className={s.test}>
        <Link to="#">я</Link>
      </div>
      <div>
        <Link to="#">обо мне</Link>
      </div>  
    </nav>
  )
}
export default Navbar