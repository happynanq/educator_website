import React from 'react';
import s from "./Header.module.css"
import { Link } from 'react-router-dom';
 const Header = (props)=>{
  return(
    <nav>
    {/* <div>{props.token}</div> */}
      <div className="nav-wrapper">
        <a href="/" className="brand-logo"><img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""/></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* <li><a href="#">Profile</a></li> */}
          {props.token && props.userId?
          <li><button onClick={props.logoutUser} className="btn green"> Logout</button></li> :
          <>
            <li><Link to="/auth/login">Login</Link></li>
            <li><Link to="/auth/register">Register</Link></li>
          </>
          }
          
        </ul>
      </div>
    </nav>
  )
}
export  default Header