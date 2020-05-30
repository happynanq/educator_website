import React from "react";
import {
  changePostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   //!!! *cont = container
//   // let state = props.store.getState();

//   // const addPostCont = (text) => {
//   //   props.store.dispatch(addPostActionCreator(text));
//   // };

//   // const changePostCont = (text) => {
//   //   props.store.dispatch(changePostActionCreator(text));
//   // };
//   // debugger

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         const addPostCont = (text) => {
//           store.dispatch(addPostActionCreator(text));
//         };

//         const changePostCont = (text) => {
//           store.dispatch(changePostActionCreator(text));
//         };
//         return (
//           <MyPosts
//             posts={state.profilePage.posts}
//             changePost={changePostCont}
//             addPost={addPostCont}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state)=>{
  return{

    newPostText:state.profilePage.newPostText,
    posts:state.profilePage.posts
  } 
}

let mapDispathToProps = (dispatch)=>{
  return{
    changePost:(text)=>{
      dispatch(changePostActionCreator(text));
    },
    addPost:(text)=>{
      dispatch(addPostActionCreator(text));
    }
  } 
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)


export default MyPostsContainer;
