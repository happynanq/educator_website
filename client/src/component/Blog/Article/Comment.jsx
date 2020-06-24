import React, { useEffect, useState } from 'react';
import s from './Comment.module.css'


const Comment = (props)=>{
  
  const [name,setName] = useState('')
  const [avatar, setAvatar] = useState("")
  useEffect(() => {
    let a  = async()=>{
      debugger
      const a = await props.getName(props.userId).then(res=>res)
      setName( a.userName)
      setAvatar(a.avatar)
      
    }
    a()
    // start()
    // let b = a().then(res=>res)
    // setName(b)

  }, [])

  return(
    <div className={s.wrapper}>

      <div className={s.userInfo}> 
        <img className={s.commentImage} src={!avatar ?"https://www.iconninja.com/files/852/748/36/customer-userphoto-user-icon.png": avatar } alt=""/>
        {name}
      </div>
      <div className="userComment">
        {props.userText}
      </div>
      

    </div>
  )
}

export default Comment
