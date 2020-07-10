import React, { useEffect, useState } from 'react';
import s from './Comment.module.css'
import { useHttp } from '../../../hooks/http.hook';


const Comment = (props)=>{
  
  const [name,setName] = useState('')
  const [avatar, setAvatar] = useState("")
  const {request, loading}=useHttp()

  const getName= async(userId)=>{
    const response = request("/api/user/getUser", "POST", {userId} )
    const data = await response
    // let wewe = await props.getUserName(userId)
    
    return {userName:data.userData.userName, avatar:data.userData.avatar}
  }

  useEffect(() => {
    let a  = async()=>{
      
      const a = await getName(props.userId).then(res=>res)
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
      {loading ? 
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
        :
        <>
          <div className={s.userInfo}> 
            <img className={s.commentImage} src={!avatar ?"https://www.iconninja.com/files/852/748/36/customer-userphoto-user-icon.png": avatar } alt=""/>
            {name}
          </div>
          <div className="userComment">
            {props.userText}
          </div>
        </>
      }
    </div>
  )
}

export default Comment
