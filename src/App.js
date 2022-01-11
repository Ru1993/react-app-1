import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContent from './component/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import Preloader from './component/Common/Preloader/Preloader';
import { initialasetApp } from './redux/appReducer';
import store from './redux/reduxStore';
import { withSuspense } from './component/hoc/withSuspense';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./component/Login/Login'));

class App extends React.Component {

  componentDidMount() {
    this.props.initialasetApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-grid'>
        <HeaderContent />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>

            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />

            <Route path='/users' render={() => <UsersContainer />} />

            <Route path='/login' render={withSuspense(Login)} />

            <Redirect from="/" to="/profile" />

            <Route path='*' render={()=><div>404 NOT FOUND</div>}/>

          </Switch>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let ContainerApp = connect(mapStateToProps, { initialasetApp })(App);

let AppComponent = (props) => {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <ContainerApp />
      </Provider>
    </BrowserRouter>
  )
}

export default AppComponent;