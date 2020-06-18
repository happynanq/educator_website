import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Create.module.css'
import M from 'materialize-css'; 
import CreateFormPoints from './CreateFormPoints'
const CreateForm = (props)=>{
  
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  });
  const points = [ // !STATIC ELEMENT!
    {title:"H", content:['h2', 'h3','h4']}, {title:"B"}, {title:"I"}, {title:"U"}, {title:"S"}, {title:"link"}, {title:"img"}
  ]
  return (
    <div className="row">
      <div>

        {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a> */}

        {points.map(option=> <CreateFormPoints option={option}/> )}
        <div className={s.textarea_wrapper}>
          <textarea name="" id="" cols="30" rows="7"></textarea>
        </div>
      </div>
      {/* <form className="col s12" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="input-field col s11">
          <Field name="title" id="title" type="text" className="validate" component="textarea"/>

            <label htmlFor="title">Title</label>
          </div>
        </div>
        
        {props.arr.map((c)=>{
          let iterableArticle = "articleText_" + c
          let iterableLink = "articleLink_" + c
          let iterableImg = "articleImg_" + c
          return(
            <div className={s.wrapper + ' ' + "col s11"} key={c}>
              <div className="row" >
                <div className="input-field col s11">
                  <Field name= {iterableArticle}  id="articleText" type="text" className="validate" component="textarea"/>
                  
                  <label htmlFor="articleText">text</label>
                </div>
              </div>
              <div className="row" key={-c}>
                <div className="input-field col s10">
                  <Field name= {iterableLink}  id="articleLink" type="text" className="validate" component="textarea"/>
                  
                  <label htmlFor="articleLink">link</label>
                </div>
              </div>
              <div className="row" key={-c*100}>
                <div className="input-field col s10">
                  <Field name= {iterableImg}  id="articleImg" type="text" className="validate" component="textarea"/>
                  
                  <label htmlFor="articleImg">img</label>
                </div>
              </div>
            </div>
          )
        })
          
        }
        
        <button className="btn">Напечатать параграф</button>
        
        
      </form> */}
    </div>
  )
}

const CreateFormRedux = reduxForm({
  form:"createArticle"
})(CreateForm)

export default CreateFormRedux 