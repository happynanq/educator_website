import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';




const Dialogs = (props)=>{

  const DialogItemRender = props.dialogItems.map(data=>{
    
    return(
      <DialogItem name={data.name} key={data.id} id={data.id} />

    )
  })

  const MessageRender = props.messages.map(element=>{
    return <Message message ={element.message} key={element.id}/>
    
  })


  const newDialogElement = React.createRef()
  
  const sendMessage = ()=>{
    //props.dispath(SEND-MESSAGE)
    props.sendMessage()

    // props.sendMessage()
    // props.updateDialogText("")

  } 

  const messageChange = ()=>{
    //props.dispath(UPDATE-DIALOGS-PAGE)

    props.messageChange(newDialogElement.current.value)
    
    // props.updateDialogText(newDialogElement.current.value)
  }

  return(
    <div className={s.dialogs}>
      <div className={s.dialogs__items }>
          {DialogItemRender}
      </div>
      <div className={s.messages}>
        {MessageRender}
        <textarea ref={newDialogElement} onChange={messageChange} value={props.newDialogText}/>
        <button onClick={sendMessage}>Написать</button>
      </div>
        
    </div>
  )
}

export default Dialogs
