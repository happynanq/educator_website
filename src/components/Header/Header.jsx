import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props)=>{
  let photo = props.photo ?props.photo : "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
  return(
    <header className={s.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
          alt="Log"
        />
        <div className={s.loginBlock}>
          <img src={photo} alt="YOUR AVATAR"/>
          { props.isAuth ? props.login:
          <NavLink to="/login">
            Login
          </NavLink>
          }
        </div>
      </header>
  )
}
export default Header