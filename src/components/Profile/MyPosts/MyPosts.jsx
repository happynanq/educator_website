import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Post/Post'

const MyPosts = (props)=>{


  let DialogsElement = props.posts.map(element=>{return(
    <Posts message={element.message} key={element.id} likesCount={element.likesCount}/>
  )})

  const newPostElement = React.createRef()
  
  const addPost = ()=>{
    // let text = newPostElement.current.value
    
    props.addPost(newPostElement.current.value)
    // props.dispatch(addPostActionCreator(newPostElement.current.value))
  }

  const changePost = ()=>{

    props.changePost(newPostElement.current.value)
    // props.dispatch(changePostActionCreator(newPostElement.current.value))

  }
  return (
    <div>
      
      <div className={s.MyPost}>
        <h3>MyPost</h3>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={changePost}/>
        </div>
        <div>
          <button onClick={addPost}>Отправить</button>
        </div>
      </div>
      <div>
      {DialogsElement}
      </div>
    </div>
  );
}

export default MyPosts