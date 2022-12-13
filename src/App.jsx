import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Movies from './Component/Movies/Movies'
import Tv from './Component/Tv/Tv'
import Pepole from './Component/Pepole/Pepole'
import Detalis from './Component/Detalis/Detalis'
import Detalispep from './Component/Detalispep/Detalispep'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'

import jwtDecode from 'jwt-decode'
import Profail from './Component/Profail/Profail'
import { useEffect } from 'react'
import ProdectRoute from './Component/ProdectRoute/ProdectRoute'
import { Offline } from 'react-detect-offline'
import Diss from './Component/Diss/Diss'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { useState } from 'react'










export default function App() {
let{userData,setuserData}=useContext(AuthContext)
  useEffect(()=>{
    if (localStorage.getItem("userToken")!==null) {
      saveUserData();
    }
  },[])


function saveUserData() {
  let x =localStorage.getItem("userToken")
  let decodeToken=jwtDecode(x)
  setuserData(decodeToken)
}
  let routers =createHashRouter([
    {path:'/',element:<Layout setuserData={setuserData} userData={userData}/> ,children:[
      {index:true,element:<ProdectRoute userData={userData}><Home/></ProdectRoute>},
      {path:'movies',element:<ProdectRoute userData={userData}><Movies/></ProdectRoute>},
      {path:'tv',element:<ProdectRoute userData={userData}><Tv/></ProdectRoute>},
      {path:'pepole',element:<ProdectRoute userData={userData}><Pepole/></ProdectRoute>},
      {path:'detalis/:id/:media',element:<ProdectRoute userData={userData} ><Detalis/></ProdectRoute>},
      {path:'detalispe/:id/:media',element:<ProdectRoute userData={userData}><Detalispep/></ProdectRoute>},
      {path:'profail',element:<ProdectRoute><Profail userData={userData}/></ProdectRoute> },
      {path:'login',element:<Login saveUserData={saveUserData} />},
      {path:'register',element:<Register/>},
    ]}
  ])
  
  
  return (
    <>
   
     
    <RouterProvider router={routers}/>
    
    <Offline><Diss/></Offline>
    
    
    
    </>
   
   
  )
}
