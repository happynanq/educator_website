import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader' 
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props)=>{

  if(!props.profile ){
    return <div>
      <Preloader/>
    </div>
  }
  
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__block +' '+ s.wrapper__block_1}>
        {/* <img
          src="https://images.wallpaperscraft.ru/image/dorozhka_les_derevo_trava_ten_zelen_leto_zapovednik_prostory_peyzazh_61199_2560x1440.jpg"
          alt="content-img"
        /> */}
      </div>
      <ProfileStatus{...props}/>
    </div>
      
  );
}

export default ProfileInfo