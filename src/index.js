import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import MediaContextProvider from './context/Mediyastor';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AuthContextProvider>
    <MediaContextProvider>
    <App />
    </MediaContextProvider>
    </AuthContextProvider>
   
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// let x =createBrowserRouter([
//   {path:'/' ,element:<Layout/> ,errorElement:<Notfount/> ,children:[
//     {path:true ,element:<Home/>},
//     {path:'about' ,element:<About/>},
//     {path:'gallary' ,element:<Gallary/>}
//   ]}
// ])

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './Component/About/About'
// import Home from './Component/Home/Home'
// import Gallary from './Component/Gallary/Gallary'
// import Layout from './Component/Layout/Layout'
// import Notfount from './Component/Notfound/Notfount