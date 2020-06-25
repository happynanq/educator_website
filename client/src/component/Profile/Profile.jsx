import React from 'react'
import s from './Profile.module.css'
import {ProfileApi} from '../../api/api'
import { useState } from 'react'

const Profile = (props)=>{
  
  const handleClick = ()=>{
    const newPhoto = prompt("Введите URL картинки")
    if(!newPhoto){
      window.M.toast({html:"Вы ничего не ввели  :("})
      return
    }
    ProfileApi.changeUserData(newPhoto ,props.userId)
    props.setAvatar(newPhoto)
  }
  return(
    <div className="container">
      <div className="row">
        <div className="col s4">
          <img className={s.image} src={props.avatar} alt="У вас нет фото" id="photo"/>
          <button className="btn" onClick={handleClick} >  Изменить фото</button>
        </div>
        <div className="col s8">
          <span>{props.name}</span>
          <hr/>
          <span>{props.email}</span>
          <hr/>
          <span>{props.privilege}</span>
        </div>
      </div>
    </div>
  )
}
export default Profile