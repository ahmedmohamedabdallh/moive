import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default function Layout({userData ,setuserData}) {
  let navigate=useNavigate()
  function logout() {
    localStorage.removeItem("userToken")
    setuserData(null)
    navigate('/login')
    
  }
  return<>
  <Navbar logout={logout} userData={userData}/>
<div className="container">
<Outlet/>
</div>

  <Footer/>
  </>
}
