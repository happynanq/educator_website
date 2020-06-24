import React, { useEffect } from 'react';
import { useState } from 'react';

const ArticleForm = (props)=>{
  const [text,setText] = useState()
  
  const handleClick = async()=>{
    console.log("wewe",  await props.sendComment(props.match.params.id,props.userId, text ))
    
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

