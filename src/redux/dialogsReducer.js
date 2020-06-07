const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_DIALOGS_PAGE = "UPDATE-DIALOGS-PAGE";


let initialState = {
      messages: [{ message: "Hellow",id:1 }, { message: "How a u?", id:2 }],
      dialogItems: [
        { name: "Kirill", id: 1, active: true },
        { name: "Vladilen", id: 2 },
        { name: "Lena", id: 3 },
      ],
      newDialogText: "abc",
    }


export const dialogsReducer = (state=initialState, action) => {
  let stateCopy = {...state}
  
  switch (action.type) {
    
    case SEND_MESSAGE:
      const newMessage = {
        message: state.newDialogText,
        id: 4,
      };
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage);
      stateCopy.newDialogText = "";
      return  stateCopy
    case UPDATE_DIALOGS_PAGE:{

      stateCopy.newDialogText = action.newText;
      return stateCopy
    }
    default:
      return state
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const messageChangeActionCreator = (newText) => {
  return {
    type: UPDATE_DIALOGS_PAGE,
    newText: newText,
  };
};