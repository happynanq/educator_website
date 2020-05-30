import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { navbarReducer } from "./navbarReducer";



const store = {
  _state: {
    dialogsPage: {
      messages: [{ message: "Hellow", id:1 }, { message: "How a u?", id:2 }],
      dialogItems: [
        { name: "Kirill", id: 1, active: true },
        { name: "Vladilen", id: 2 },
        { name: "Lena", id: 3 },
      ],
      newDialogText: "abc",
    },
    profilePage: {
      posts: [
        { message: "Hi, how are u? ", id: 1, likesCount: 13 },
        { message: "Nice social network ", id: 2, likesCount: 13 },
      ],
      newPostText: "abc",
    },
    navbarPage: {
      friends: [
        {
          name: "Vladilen",
          id: 1,
          image:
            "https://www.meme-arsenal.com/memes/52b065ac2be8a907cfaecb71205fedd4.jpg",
        },
        {
          name: "Lena",
          id: 2,
          image:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf296ba5-0d5a-4ac6-b534-9ad3df9de58f/ddy3g1z-5c69feca-339a-4add-9f62-b3d5cf95164b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2YyOTZiYTUtMGQ1YS00YWM2LWI1MzQtOWFkM2RmOWRlNThmXC9kZHkzZzF6LTVjNjlmZWNhLTMzOWEtNGFkZC05ZjYyLWIzZDVjZjk1MTY0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qIZx5LmlwACKr2L-YJlt96Q96_1rk3LwZ7_eheOUaRg",
        },
      ],
    },
  },
  //! MAIN BLL LOGIC
  _callSubscribe() {
    console.log(" 0 observers  ");
  },
  getState() {
    // console.log(store._state)
    // debugger

    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
  //!DISPATH
  dispath(action) {

    this._state.profilePage= profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action)
    this._callSubscribe(this.getState());

    
  }
}
window.store = store;
//? STORE END


// let rerenderEntireTree = ()=>{
//   console.log(' 0 observers  ');
// }

// let state = {
//   dialogsPage:{
//     messages:[{message:"Hellow"}, {message:"How a u?"}],
//     dialogItems:[{name:"Kirill", id:1,active:true}, {name:"Vladilen", id:2}, {name:"Lena", id:3}],
//     newDialogText:"abc"

//   },
//   profilePage:{
//     posts:[{message:'Hi, how are u? ',id:1, likesCount:13, },{message:'Nice social network ',id:2, likesCount:13}],
//     newPostText:"abc"
//   },
//   navbarPage:{
//     friends:[
//       {name:"Vladilen", id:1, image:"https://www.meme-arsenal.com/memes/52b065ac2be8a907cfaecb71205fedd4.jpg"},
//       {name:"Lena", id:2, image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf296ba5-0d5a-4ac6-b534-9ad3df9de58f/ddy3g1z-5c69feca-339a-4add-9f62-b3d5cf95164b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2YyOTZiYTUtMGQ1YS00YWM2LWI1MzQtOWFkM2RmOWRlNThmXC9kZHkzZzF6LTVjNjlmZWNhLTMzOWEtNGFkZC05ZjYyLWIzZDVjZjk1MTY0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qIZx5LmlwACKr2L-YJlt96Q96_1rk3LwZ7_eheOUaRg"}]
//   },
// }

//! BLL MAIN LOGIC
// window.state=state

// export const subscribe=(observer)=>{
//   rerenderEntireTree = observer
// }

//!PROFIEL
// export const addPost = () =>{
//   // console.log('aaaaaaaaaaa');
//   const newPost = {
//     message:state.profilePage.newPostText,
//     id:3,
//     likesCount:0

//   }
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ""
//   rerenderEntireTree()

// }

// export const updateNewPostText =(newText)=>{
//   state.profilePage.newPostText = newText
//   rerenderEntireTree()

// }

//! DIALOGS

// export const sendMessage = ()=>{
//   const newPost = {
//     message:state.dialogsPage.newDialogText,
//     id:4,
//   }
//   state.dialogsPage.messages.push(newPost)
//   rerenderEntireTree()

// }

// export const updateDialogText=(newText)=>{
//   state.dialogsPage.newDialogText = newText
//   rerenderEntireTree()
// }

export default store;
