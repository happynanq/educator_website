import React from 'react';
import s from './Header.module.css'
const Profile = ()=>{
  return(
    <header className={s.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
          alt="Log"
        />
      </header>
  )
}

export default Profile
