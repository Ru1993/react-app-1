import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Navbar from './component/Navbar/Navbar';
//import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContent from './component/Header/HeaderContainer';
import Login from './component/Login/Login';
import { connect, Provider } from 'react-redux';
import Preloader from './component/Common/Preloader/Preloader';
import {initialasetApp} from './redux/appReducer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import store from './redux/reduxStore';
import { withSuspense } from './component/hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initialasetApp();
  }

  render() {

    if (!this.props.initialaset) {
      return <Preloader />
    }

    return (
      <div className='app-grid'>
        <HeaderContent />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />

        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialaset: state.app.initialaset
})

let ContainerApp = connect(mapStateToProps, { initialasetApp })(App);

let AppComponent = (props) =>{
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ContainerApp />
      </Provider>
    </BrowserRouter>
  )
}

export default AppComponent;