 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
  import App from './App';
// import Vignesh from './App';
// import reportWebVitals from './reportWebVitals';
var arr=[
  {sno:1,sname:"vignesh",mark:44},
  {sno:2,sname:"sasi",mark:200},
  {sno:3,sname:"ranjith",mark:100},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App user={arr}></App>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
