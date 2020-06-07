import {
  messageChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from 'react'
import { witchAuthRedirect } from "../../hok/WithAuthRedirect";
import { compose } from "redux";



let mapStateToProps= (state)=>{
  return{
    messages:state.dialogsPage.messages,
    dialogItems:state.dialogsPage.dialogItems,
    newDialogText:state.dialogsPage.newDialogText,

  }
}
let mapDispatchToProps= (dispatch)=>{
  return{
    messageChange:(actionItems)=>{
      dispatch(messageChangeActionCreator(actionItems));
    },
    sendMessage:()=>{
      dispatch(sendMessageActionCreator())

    }
  }
}
// const AuthRedirectComponent = (props)=>{
//   if(!props.isAuth ){
//     return <Redirect to="/login" />
//   }
//   return <Dialogs {...props}/>
// }



const AuthRedirectComponent = witchAuthRedirect(Dialogs) // 1) Redirect or 2) real page 


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  witchAuthRedirect
)(Dialogs)
