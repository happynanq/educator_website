import React from 'react';
import 'materialize-css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import  Header  from './component/Header/Header';
import  Navbar  from './component/Navbar/Navbar';
import "./index.css"
import RegisterContainer from "./component/Auth/Register/RegisterConteiner"
import LoginConteiner from './component/Auth/Login/LoginContainer';
function App() {
  return (
    <div className="">
      <div className="row">
        <Header/>
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
          </Switch>

        </div>
      </div>
    </div>
    
  );
}

export default App;
