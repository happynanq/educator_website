import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const NavbarFriend =(props)=>{
  return(
    <div>
      <img src={props.friend.image} alt="ava"/>
      <span>{props.friend.name}</span>
      
    </div>
  )
}



const Nav = (props)=>{

  const FriendRender = props.navInfo.friends.map(f=>{
    return  <NavbarFriend key={f.id} friend={f}  id={f.id}/>
  })
    // return  <NavbarFriend friend={props.navInfo.friends}/>
    // return (<h1>a aaa</h1>)

  

  return(
    <nav className={s.nav}>
      <div className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
      <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink></div>
      <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
      <div className={s.item}><NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>

      <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
      <div className={s.item}><NavLink to='/music2' activeClassName={s.activeLink}>Music2</NavLink></div>

      <div className={s.item}><NavLink to='/setting' activeClassName={s.activeLink}>Setting</NavLink></div>
      <div className={s.item}>
        {FriendRender}
      </div>
    </nav>
  )
}
export default Nav