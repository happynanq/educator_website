import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

const  App = (props)=> {
  // let data2= 12332132121212
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavContainer navInfo={props.store.getState().navbarPage}/>
        {/* <Nav/> */}
        <div className="app-wrapper__content">
          
          {/* <Route path="/profile" component={Profile }/> */}
          <Route path="/profile/:userId?" render={ () => <ProfileContainer  />}/>

          <Route path="/dialogs" render={ () => <DialogsContainer />} />

          <Route path="/users" render={()=> <UsersContainer/>} />
          <Route path="/login" render={()=> <LoginContainer/>} />


          
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>

          <Route path="/setting" component={Setting}/>
          {/* <Dialogs/> */}

          {/* <Profile/> */}

        </div>
      </div>
  );
}
// dialogs - 18 lesson


export default App;
