import { axiosReqMethods, authAPI } from "../api/api";

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
          // debugger
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
// export 

export const loginUser = (email, password )=>  async  (dispatch)=>{
  // authAPI.loginUser() 
  // .then(res=>{
  //   console.log("res",res)
  //   console.log(res.data.resultCode)
  // })
  try{

    console.log(email, password)
    debugger
    await fetch("https://social-network.samuraijs.com/api/1.0/auth/login",
    {
      method:"POST",
      body:{email, password}, 
      // headers:
      // {
      //   withCredentials: true,
      //   // "Content-Type" : "application/json", 
      //   "Access-Control-Allow-Headers":true
      // }
    })
  
      .then(res=>{
        
        res.json()
      }).then(res=>{console.log(res)})
  }catch (e) {
    console.log("autch error: ", e)
  }
}
