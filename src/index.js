import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import state from './store/store';
import { addPost, newPostText, subscribe } from './store/store';
//import reportWebVitals from './reportWebVitals';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} newPostText={newPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state); 

subscribe(rerenderEntireTree);



//reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );