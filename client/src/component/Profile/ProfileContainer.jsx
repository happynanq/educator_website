import React, { useState } from 'react'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUserName } from '../../redux/userReducer'

const ProfileContainer = (props)=>{
  const [avatar, setAvatar]= useState("")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [privilege, setPrivilege] = useState('')
  const [userId, setUserId] = useState('')
  const [rerender, setRerender] = useState("")
  if(!localStorage.getItem("userData")){
    return <div>Войдите или создайте аккаунт</div>
  }
  const a = JSON.parse( localStorage.getItem("userData")).userId
  props.getUserName(a).then(res=>{
    
    const {email, privilege,userName,avatar, _id} = res.userData
    setAvatar(avatar)
    setName(userName)
    setEmail(email)
    setPrivilege(privilege)
    setUserId(_id)
  })
  
  return(
    <Profile avatar={avatar} name={name} email={email} privilege={privilege} userId={userId} setAvatar={setAvatar}/>
  )
}
export default compose(
  connect(null, {
    getUserName
  })
)(ProfileContainer)