import React, { useEffect, useRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Create.module.css'
import M from 'materialize-css'; 
import CreateFormPoints from './CreateFormPointer'
import { createTag } from './createTag';
const CreateForm = (props)=>{
  
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    textareaRef.current.value = localStorage.getItem("addArticleText")
    return function cleanup (){
      localStorage.setItem("addArticleText", textareaRef.current.value)
    }
  });
  const textareaRef = useRef(null)
  const points = [ // !STATIC ELEMENT!
    {title:"H", content:['h2', 'h3','h4']}, {title:"B"}, {title:"I"}, {title:"U"}, {title:"S"}, {title:"link"}, {title:"img"}
  ]
  
  const addTagInText = (value)=>{
    value = createTag(value)
    textareaRef.current.focus()
    // textareaRef.current.selectionStart = 1
    textareaRef.current.value += value
  }
  const previewHandler = ()=>{
    props.setPreviewText(textareaRef.current.value)
    props.togglePreview()
  }
  const submitHandler = ()=>{
    let titleImg = prompt("Введите ссылку на превью")
    let titleHeader = prompt("Введите заголовок статьи ")
    let titleText = prompt("Введите подтекст статьи")
    if(!titleImg || !titleHeader || !titleText){
      M.toast({html:"Вы что то не ввели "})
      return
    }
    debugger
    const  data = {
      titleImg, titleHeader, titleText,
      text:textareaRef.current.value
    } 
    props.sendArticleAsync(data)
    console.log(textareaRef.current.value);
  }

  return (
    <div className="row">
      <div>

        {/* <div className="input-field">
          <input id="titleText" name="titleText" type="text" value={props.title} onChange={titleChangeHandler}/>
          <label htmlFor="titleText">Заголовок</label>
        </div> */}

        {points.map(option=> <CreateFormPoints addTagInText={addTagInText} option={option}/> )}
        
        <span className="right">
          <button className="btn" onClick={previewHandler}>Предпросмотр</button>
        </span>

        <div className={s.textarea_wrapper}>
          <textarea ref={textareaRef} name="formText"   data-component="textarea" ></textarea>
        </div>
        <button className="btn" onClick={submitHandler}>Отправить</button>
      </div>
    </div>
  )
}

const CreateFormRedux = reduxForm({
  form:"createArticle"
})(CreateForm)

export default CreateFormRedux 