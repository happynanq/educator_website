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
        <Link to="#">Блог</Link>
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