import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import { Route } from 'react-router';
import Navbar from './component/Navbar/Navbar';

const App = (props) => {

  return (
    <div className='app-grid'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/profile' render={() => <Profile
          ProfileContent={props.state.ProfileContent}
          dispatch={props.dispatch}
        />} />
        <Route path='/dialogs' render={() => <Dialogs 
        DialogsContent={props.state.DialogsContent} 
        dispatch={props.dispatch}
        />} />

      </div>
    </div>
  );
}

export default App;
