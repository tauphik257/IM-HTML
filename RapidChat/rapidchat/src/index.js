import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/homepage/home';
import Main from './components/friendlist/Main';
import Login from './components/loginpage/Login.js';
import Signup from './components/signuppage/signin';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div className='container-fluid'>
      <div className='row vh-100'>
        <div className='col-3 p-0'>
          <Main />
        </div>
        <div className='col-9'>
          <Home />
        </div>
      </div>
    </div> */}
    <>
    <Signup/>
    {/* <Login/> */}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
