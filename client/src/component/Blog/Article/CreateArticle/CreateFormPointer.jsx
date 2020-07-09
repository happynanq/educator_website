import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import s from './Create.module.css'
import M from 'materialize-css'; 
const CreateFormPoints = (props)=>{

  // useEffect(() => {
  //   let elems = document.querySelectorAll('.dropdown-trigger');
  //   M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  // });
  const clickHandler = (e)=>{
    const element = e.currentTarget
    console.log(element)
    // element.innerHTML 
    props.addTagInText(element.innerHTML)
  }
  return (
    <span className={s.PointWrapper }>
      
      {props.option.content ? 
        <>  
          <button className='dropdown-trigger btn grey darken-2'  data-target='dropdown1'>{props.option.title}</button>

          <ul id='dropdown1' className='dropdown-content'>
            {props.option.content.map(c=> <li onClick={clickHandler}>{c}</li> )}
          </ul>
        </>
      :
        <>
          <button  className='btn grey darken-2' onClick={clickHandler}>{props.option.title}</button>
        </>
      }

    </span>
  )
}



export default CreateFormPoints 