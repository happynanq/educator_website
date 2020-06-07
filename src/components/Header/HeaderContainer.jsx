import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthInfo,setAuthUserData, registerCurrentUser } from '../../redux/authReducer';
import { axiosReqMethods } from '../../api/api';


class HeaderContainer extends React.Component{
  componentDidMount(){
    console.log(this.props.login, 'login');
      this.props.registerCurrentUser()
        axiosReqMethods.getAuthUserData()
        .then((response) => {
          if(response.resultCode === 0 ){
            // let {id, email, login} = response.data.data 
            let userData = {...response.data}
            // console.log(response.data, "data");
            // this.props.setAuthUserData(userData)
            this.props.setAuthUserData(userData.id,  userData.email, userData.login)  
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

  render(){
    return(
      <Header {...this.props}/>
    )
  }
}
let mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  photo: state.auth.photo
  
})
export default connect(mapStateToProps, {
  setAuthUserData,setAuthInfo,registerCurrentUser
})(HeaderContainer)