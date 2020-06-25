import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from "./Navbar.module.css"
 const Navbar = (props)=>{
  return(
    <nav className={s.navigation }>
      <div>
        <NavLink to="/main" className={s.link} activeClassName={s.activeLink}>О Авторе</NavLink>
      </div>
      <div>
        <NavLink to="/blog" className={s.link} activeClassName={s.activeLink}>Блог</NavLink>
      </div>
      {props.role === "Admin"?<div>
        <NavLink to="/create/article" className={s.link} activeClassName={s.activeLink}>Добавить статью</NavLink>
      </div> :''}
      
      <div className={s.test}>
        <NavLink to="/me" className={s.link} activeClassName={s.activeLink}>Профиль</NavLink>
      </div>
      
    </nav>
  )
}
export default Navbar