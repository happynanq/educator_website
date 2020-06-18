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

  }
  return (
    <span className={s.PointWrapper }>
      
      {props.option.content ? 
        <>
          <Link className='dropdown-trigger btn grey darken-2'  data-target='dropdown1'>{props.option.title}</Link>

          <ul id='dropdown1' class='dropdown-content'>
            {props.option.content.map(c=> <li onClick={clickHandler}>{c}</li> )}
          </ul>
        </>
      :
        <>
          <Link  className='btn grey darken-2' onClick={clickHandler}>{props.option.title}</Link>
        </>
      }

    </span>
  )
}



export default CreateFormPoints 