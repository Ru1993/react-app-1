import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppComponent from './App';
import App from './App';
import './index.css';
import store from './redux/reduxStore';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(<AppComponent />, document.getElementById('root'));




//reportWebVitals();

