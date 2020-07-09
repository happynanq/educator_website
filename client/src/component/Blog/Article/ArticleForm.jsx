import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/message.hook';

const ArticleForm = (props)=>{
  const [text,setText] = useState()
  const {request} = useHttp()
  const message = useMessage()
  const handleClick = async()=>{
    if(!props.userId){
      alert("Чтобы оставить комментарий вы должны зарегистрироваться  ")
      return
    }
    try {
      const response = request("/api/comment/create","POST",{id:props.match.params.id,userId:props.userId, text})
      const data = await response
      message(data.message)
      
    } catch (e) {
      e.map(e=>message(e))
    }
    // console.log("wewe",  await props.sendComment(t ))
    
    setText("")
    props.setRerender("")
  }
  const handleChange = (e)=>{
    setText(e.currentTarget.value)
  }
  return(
    <>
      <div className="input-field">
        <input id="input" className={"col s11"} type="text" value={text} onChange={handleChange} />
        <label htmlFor="input">Оставьте Комментарий</label>
        <button className="btn" onClick={handleClick}>Send</button>
      </div>
    </>
  )
}
export default ArticleForm

