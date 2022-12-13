import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData,logout}) {
  return (
   <nav className=' p-2 d-flex justify-content-between flex-md-row flex-column'>
    <div className="left-nav d-flex align-items-center flex-md-row flex-column">
      <h1 className='m-0 pe-3'>Noxe</h1>
{userData?<ul className='list-unstyled hov d-flex m-0 align-items-center flex-md-row flex-column'>
        <li className='px-2'><Link className='hov' to='/'>Home</Link></li>
        <li className='px-2'><Link className='hov' to='movies'>Movies</Link></li>
        <li className='px-2'><Link className='hov' to='tv'>Tv</Link></li>
        <li className='px-2'><Link className='hov' to='pepole'>Pepole</Link></li>
       
      </ul>:''}
   
    </div>


    <div className="right-nav d-flex align-items-center flex-md-row flex-column">
     <div className="social-icon">
      <i className='fab mx-1 fa-facebook'></i>
      <i className='fab mx-1 fa-instagram'></i>
      <i className='fab mx-1 fa-twitter'></i>
      <i className='fab mx-1 fa-spotify'></i>
      <i className='fab mx-1 fa-youtube'></i>
     </div>




      <ul className='list-unstyled d-flex m-0 align-items-center'>

{
  userData?<>
    <li onClick={logout} className='px-2 cusorl hov'><span >LogOut</span></li>
        <li className='px-2'><Link className='hov' to='profail'>Profail</Link></li>
  </>:<>
  <li className='px-2 '><Link className='hov' to='login'>Login</Link></li>
        <li className='px-2 '><Link className='hov' to='register'>Register</Link></li>
  </>
}

       
      
        
       
      </ul>
    </div>

   </nav>
  )
}
