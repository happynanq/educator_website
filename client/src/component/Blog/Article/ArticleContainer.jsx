import React, { useEffect } from 'react';
import Blog from '../Blog';
import { blogApi } from '../../../api/api';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getArticleText, sendComment, getComment } from '../../../redux/blogReducer';
import s from "../Blog.module.css"
import { setUserData, getUserName } from '../../../redux/userReducer';
import Comment from './Comment';
import ArticleForm from './ArticleForm';
const ArticleContainer = (props)=>{
  const [comments, setComments] = useState([])
  const [rerender, setRerender] = useState(null)
  let one = ''
  
  
  useEffect( () => {
    async function getUsers (userId){
      
      props.setUserData(userId)
    }
    async function fetchData(){
      console.log("userId", props.userId);
      // setComments(await props.getComment(props.match.params.id))
      let u = await props.getComment(props.match.params.id)
      if(u !=comments){
        setComments(u)
      }
    }

    if(!localStorage.getItem("userData")){
      return
    }
    getUsers(JSON.parse(localStorage.getItem("userData")).userId )
    fetchData()
  }, [rerender]);
  props.getArticleText(props.match.params.id)
  
  const setHtml = ()=>({
    __html:props.pageText
  })
  const getUserNameToComment= async(userId)=>{
    let wewe = await props.getUserName(userId)
    debugger
    return {userName:wewe.userData.userName, avatar:wewe.userData.avatar}
  }
  
  
  
  return(
    <>
      <div className={s.wrapper} dangerouslySetInnerHTML={setHtml()}></div>
      <div className='container'>
        <div > Комментарии </div>
        <div> { comments.comments 
          ? comments.comments.map(e=> {
            return(
              <div className="">
                <Comment userId={e.userId} userText={e.text} getName={getUserNameToComment} />
              </div>)}) 
          : "Комментариев ещё нет!"} 
        </div>
      </div>
      <ArticleForm {...props} setRerender={setRerender}/>
    </>
  )
}

const mapStateToProps = (state)=>{
  return{
    pageText : state.blog.text,
    userId:state.auth.userId
  }
}
export default compose(
  connect(mapStateToProps,{
    getArticleText,sendComment,getComment,setUserData,getUserName
  }),
  withRouter
)(ArticleContainer)

// export default connect(null,{

// })(BlogContainer)