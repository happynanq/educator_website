import React from 'react'
import { Link } from 'react-router-dom'
import s from "./Navbar.module.css"
 const Navbar = (props)=>{
  return(
    <nav className={s.navigation}>
      <div>
        <Link>Главная страница</Link>
      </div>
      <div>
        <Link>Блог</Link>
      </div>
      <div className={s.test}>
        <Link>я</Link>
      </div>
      <div>
        <Link>обо мне</Link>
      </div>  
    </nav>
  )
}
export default Navbar