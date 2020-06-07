import { axiosReqMethods } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";


export const initialState = {
      login:null,
      password:null,
      email:null,
      isAuth:false,
      userPhoto : null,
      userId : null
    }


export const authReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case SET_USER_DATA:
      
      return{
        ...state,...action.data, isAuth:true
      }  
    case SET_USER_PHOTO:
      return{
        ...state, userPhoto: action.photo
      }
    default:
      return {...state}
  }
};

export const setAuthUserData=(userId, email, login)=>{
  return{
    type:SET_USER_DATA,
    data:{userId, email, login}
  }
}
export const setAuthInfo=(photo)=>{

  return{
    type:SET_USER_PHOTO,
    photo
  }
}

export const registerCurrentUser = ()=>dispatch=>{
  axiosReqMethods.getAuthUserData()
        .then((response) => {
          if(response.resultCode === 0 ){
            // let {id, email, login} = response.data.data 
            let userData = {...response.data}
            
            dispatch(setAuthUserData(userData.id,  userData.email, userData.login))

            axiosReqMethods.getProfilePage(userData.id)      
                  .then(response=>{
                    let uPhoto = response.photos.small;
                    if(uPhoto){
                      this.props.setAuthInfo(response.photos.uPhoto)
                    }
                  })
          }
          })
}