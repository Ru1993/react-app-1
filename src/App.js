import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { Route } from 'react-router';
import Navbar from './component/Navbar/Navbar';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';

const App = (props) => {

  return (
    <div className='app-grid'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />


      </div>
    </div>
  );
}

export default App;
