import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/QUIZ/App';
import reportWebVitals from './reportWebVitals';
import SignInSide from './Components/Login/SignInSide';
import SignUp from './Components/SignUp/Signup';
import Navigate from './Components/Navigate/Navigate';
import ButtonBaseDemo from './Components/Learn/Learn';
import Cpp from './Components/QUIZ2/cpp';
import Java from './Components/QUIZ3/java';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigate/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
