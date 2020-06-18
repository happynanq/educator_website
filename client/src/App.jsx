import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import  HeaderContainer  from './component/Header/HeaderContainer';
import  Navbar  from './component/Navbar/Navbar';
import RegisterContainer from "./component/Auth/Register/RegisterConteiner"
import LoginConteiner from './component/Auth/Login/LoginContainer';
import "./index.css"
import 'materialize-css'
import { loginUser } from './redux/authReducer';
import BlogContainer from './component/Blog/BlogContainer';
import CreateContainer from './component/CreateArticle/CreateContainer';

const App=(props)=> {
  return (
    
      <div className="">
        <div className="row">
          <HeaderContainer/>
        </div>
        <div className="row">
          <div className="col s3">
              <Navbar/>
          </div>
          <div className="col s9">
            {/* ! LOGIC */}
            <Switch>

              <Route path="/auth/register">
                <RegisterContainer/>
              </Route>

              <Route path="/auth/login">
                <LoginConteiner/>
              </Route>

              <Route 
                path="/blog" 
                render ={()=><BlogContainer/> }

              />
              <Route 
                path="/create/article" 
                render ={()=><CreateContainer/> }

              />
            </Switch>
          </div>
        </div>
    </div>
  );
  
}

export default App;
