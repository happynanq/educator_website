import {
  messageChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps= (state)=>{
  return{
    messages:state.dialogsPage.messages,
    dialogItems:state.dialogsPage.dialogItems,
    newDialogText:state.dialogsPage.newDialogText

  }
}
let mapDispathToProps= (dispatch)=>{
  return{
    messageChange:(actionItems)=>{
      dispatch(messageChangeActionCreator(actionItems));
    },
    sendMessage:()=>{
      dispatch(sendMessageActionCreator())

    }
  }
}




const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs)


export default DialogsContainer;
