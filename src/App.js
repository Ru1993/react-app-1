import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { Route } from 'react-router';
import Navbar from './component/Navbar/Navbar';
import ProfileContainer from './component/Profile/ProfileContainer';
import DialogsContainer from './component/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <div className='app-grid'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/profile' render={() => <ProfileContainer
          store={props.store}
        />} />
        <Route path='/dialogs' render={() => <DialogsContainer 
        store={props.store}
        />} />

      </div>
    </div>
  );
}

export default App;
