import React, { useEffect } from 'react';
import {Switch, Route} from "react-router-dom"
import HeaderContainer  from './component/Header/HeaderContainer';
import RegisterContainer from "./component/Auth/Register/RegisterConteiner"
import LoginConteiner from './component/Auth/Login/LoginContainer';
import "./index.css"
import 'materialize-css'
import BlogContainer from './component/Blog/BlogContainer';
import CreateContainer from './component/Blog/Article/CreateArticle/CreateContainer';
import ArticleContainer from './component/Blog/Article/ArticleContainer';
import NavbarContainer from './component/Navbar/NavbarContainer';
import { loginUser } from './redux/authReducer';
import ProfileContainer from './component/Profile/ProfileContainer';

const App=(props)=> {
  // useEffect(() => {
    
  //   const start =async()=>{
  //     
  //     let checkRegister = JSON.parse( localStorage.getItem("userData"))
  //     if(!checkRegister){
  //       return
  //     }
    
  //     let {userId, token, role}=checkRegister
  //     await loginUser(userId, token, role)
  //   }
  //   start()
  // }, []);
  return (
    
      <div className="">
        <div className="row">
          <HeaderContainer/>
        </div>
        <div className="row">
          <div className="col s3">
              <NavbarContainer/>
          </div>
          <div className="col s9">
            <Switch>

              <Route path="/auth/register">
                <RegisterContainer/>
              </Route>

              

              <Route path="/auth/login">
                <LoginConteiner/>
              </Route>

              <Route 
                path="/blog"
                exact
                render ={()=><BlogContainer/> }

              />
              <Route 
                path="/blog/post/:id" 
                render ={()=><ArticleContainer/> }

              />
              

              

              <Route 
                path="/create/article" 
                render ={()=><CreateContainer/> }

              />
              <Route
                path="/me"
                render={ ()=> <ProfileContainer/> }
              />
            </Switch>
          </div>
        </div>
    </div>
  );
  
}

export default App;
