import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import  HeaderContainer  from './component/Header/HeaderContainer';
import  Navbar  from './component/Navbar/Navbar';
import RegisterContainer from "./component/Auth/Register/RegisterConteiner"
import LoginConteiner from './component/Auth/Login/LoginContainer';
import "./index.css"
import 'materialize-css'
import { loginUser } from './redux/authReducer';

const App=(props)=> {
  debugger
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
            {/* props.store.getState().auth.token */}
              { localStorage.getItem("userData") ? 
              <Redirect to='/home'/> : 
                <>
                  <Route path="/auth/register">
                    <RegisterContainer/>
                  </Route>
                  <Route path="/auth/login">
                    <LoginConteiner/>
                  </Route>
                </>
              }
            </Switch>
          </div>
        </div>
    </div>
  );
  
}

export default App;
