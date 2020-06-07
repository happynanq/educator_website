import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader' 

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
      <div className={s.wrapper__block +' '+ s.wrapper__block_2}>
        <div className={s.wrapper__content + " " + s.wrapper__content_1}>
          <img src={props.profile.photos.large} alt="AVATAR"/>
        </div>  
        <div className={s.wrapper__content + " " + s.wrapper__content_2} >
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div className={s.aboutMe}>
            <div>About Me:</div>
            <div>{props.profile.aboutMe}</div>
          </div>
        </div>
        <div className={s.wrapper__content + " " + s.wrapper__content_3}>
        <div>
          <div>Job:</div>
          <div> search work: {props.profile.lookingForAJob ? "YES" : "NO"} </div>
          <div> search work status: {props.profile.lookingForAJobDescription} </div>
        </div>
        </div>

      </div>
    </div>
      
  );
}

export default ProfileInfo