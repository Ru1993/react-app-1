import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Navbar from './component/Navbar/Navbar';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContent from './component/Header/HeaderContainer';
import Login from './component/Login/Login';

const App = (props) => {

  return (
    <div className='app-grid'>
      <HeaderContent />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login/>} />


      </div>
    </div>
  );
}

export default App;
