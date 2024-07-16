import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Garage from './components/Garage';
//import Header from './components/Header';
import FavouriteColor from './components/FavouriteColor';
import Scooter from './components/Scooter';
import List from './components/List';
import Timer from './components/Timer';
import MyForm from './components/MyForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
//----------------------------------------------------------------
//component within in a component 
// function Vehicle(){
//   return(
//     <>
//     <h1>this is my vehicle</h1>
//     </>
//   )
// }

// function Garage(){
//   return(
//     <>
//     <h1>this is my garage and</h1>

//     <Vehicle/>

//     </>

//     //----------------------------------------------------------
//   )
// }


root.render(
  <>
    {/* <App />
    <Garage/> */}

    {/* <Header/> */}
    {/* ----------------------------- */}
    {/* <FavouriteColor/>
    <Scooter/>
    <List/>

    <Timer/> */}
    {/* ------------------------------------------ */}

    <MyForm/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
