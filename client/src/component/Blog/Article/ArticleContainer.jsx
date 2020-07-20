import React, { useEffect } from 'react';
import Blog from '../Blog';
import { blogApi } from '../../../api/api';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getArticleText, sendComment, getComment,setArticleText } from '../../../redux/blogReducer';
import s from "../Blog.module.css"
import { setUserData, getUserName } from '../../../redux/userReducer';
import Comment from './Comment';
import ArticleForm from './ArticleForm';
import { useHttp } from '../../../hooks/http.hook';
const ArticleContainer = (props)=>{
  const [comments, setComments] = useState([])
  const [rerender, setRerender] = useState(null)
  const {request,loading} = useHttp()
  let one = ''
  
  
  useEffect( () => {
    async function getUsers (userId){
      
      props.setUserData(userId)
    }
    async function fetchData(){
      // setComments(await props.getComment(props.match.params.id))
      const response = request("/api/comment/get","POST",{pageId:props.match.params.id} )
      const data = await response
      if(data.comments != comments){
        setComments(data.comments)
      }
      // let u = await props.getComment(props.match.params.id)
      // if(u !=comments){
      //   setComments(u)
      // }
    }
    const fetchArticle = async(id)=>{
      try {

        
        const response = request("/api/blog/getCurrentArticleText","POST", Object({id}) )
        const data = await response
        
        props.setArticleText(data.title.text)
      } catch (e) {
        
      }
      
    }
    fetchArticle(props.match.params.id )
    // props.getArticleText(props.match.params.id)


    if(!localStorage.getItem("userData")){
      
    }else{
      getUsers(JSON.parse(localStorage.getItem("userData")).userId )
    }
    
    fetchData()
  }, [rerender]);
  //
  
  
  const setHtml = ()=>({
    __html:props.pageText
  })
  
  
  
  
  return(
    <>
      <div className={s.wrapper} dangerouslySetInnerHTML={setHtml()}></div>
      <div className='container'>
        <div > Комментарии </div>
        {/* { loading ?
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
          : */}
          <div> { comments 
            ? comments.map(e=> {
              return(
                <div className="">
                
                  <Comment userId={e.userId} userText={e.text}  />
                </div>)}) 
            : "Комментариев ещё нет!"} 
          </div>
        {/* } */}
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
    getArticleText,sendComment,getComment,setUserData,getUserName,setArticleText
  }),
  withRouter
)(ArticleContainer)

// export default connect(null,{

// })(BlogContainer)