import React, { useState, useEffect } from 'react'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUserName } from '../../redux/userReducer'
import { useHttp } from '../../hooks/http.hook'

const ProfileContainer = (props)=>{
  const [avatar, setAvatar]= useState("")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [privilege, setPrivilege] = useState('')
  const [userId, setUserId] = useState('')
  const { request,loading} = useHttp()
  useEffect(() => {

    const start = async()=>{
      const a = JSON.parse( localStorage?.getItem("userData"))?.userId
      if(!a){
        return
      }
      const response = request("/api/user/getUser", "POST", {userId:a})
      const data = await response
      
      const {email, privilege,userName,avatar, _id} = data.userData
      setAvatar(avatar)
      setName(userName)
      setEmail(email)
      setPrivilege(privilege)
      setUserId(_id)
    }
    start()
  }, []);

  if(!localStorage.getItem("userData")){
    return <div>Войдите или создайте аккаунт</div>
  }
  // const a = JSON.parse( localStorage.getItem("userData")).userId

  

  // props.getUserName(a).then(res=>{
    
  //   const {email, privilege,userName,avatar, _id} = res.userData
  //   setAvatar(avatar)
  //   setName(userName)
  //   setEmail(email)
  //   setPrivilege(privilege)
  //   setUserId(_id)
  // })
  
  return(
    <Profile 
      loading={loading} 
      avatar={avatar} 
      name={name} 
      email={email} 
      privilege={privilege} 
      userId={userId} 
      setAvatar={setAvatar}
    />
  )
}
export default compose(
  connect(null, {
    getUserName
  })
)(ProfileContainer)