import React, { useState } from 'react';
import CreateForm from './CreateForm';
import { Field } from 'redux-form';

const Create = (props)=>{
  const [previewBool, setPreviewBool] = useState(false)
  const [previewText, setPreviewText] = useState(null)
  // const [title, setTitle] = useState('')
  
  const handleSubmit = (formData)=>{
    debugger
  }
  const togglePreview = ()=>{
    setPreviewBool(!previewBool)
  }
  const createMarkup = ()=>({
    __html: previewText
  })
  return (
    <>
      <h2>Редактор текста</h2>
        
      {
        previewBool ?
          <>
            <span className="right">
              <button className="btn" onClick={togglePreview}>Редактировать</button>
            </span>
            <div dangerouslySetInnerHTML={createMarkup()}>{ }</div> 
          </>
        : 
        <>
          
          <CreateForm  {...props }onSubmit={handleSubmit} togglePreview={togglePreview} setPreviewText={setPreviewText} />
        </>
      }
    </>
  )
}
export default Create