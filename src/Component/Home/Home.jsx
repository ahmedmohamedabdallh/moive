import React from 'react'
import { useContext } from 'react';

import { Offline } from "react-detect-offline";
import { mediaContext } from '../../context/Mediyastor';




import Diss from '../Diss/Diss';

import Mediataype from '../Mediataype/Mediataype';
export default function Home() {

let{trenting,trentingtv,trentingperson}=useContext(mediaContext)
  
  return (
    <>
     
    <Offline><Diss/></Offline>
    <div className='row m-5'>
      <div className="col-md-4 align-items-center mt-4" >
        <hr className='w-25' />
<h3>Trending <br />Movies <br /> To watch now</h3>
<p className='text-muted'>most watched movies by day</p>
<hr className='w-100' />
      </div>
      {trenting.slice(0,10).map((item ,index)=> <Mediataype key={index} item={item}/>)}
     
     
    </div>
    <div className='row m-5'>
      <div className="col-md-4 align-items-center mt-4" >
        <hr className='w-25' />
<h3>Trending <br />TV <br /> To watch now</h3>
<p className='text-muted'>most watched TV by day</p>
<hr className='w-100' />
      </div>
      {trentingtv.slice(0,10).map((item ,index)=> <Mediataype key={index} item={item}/>)}
     
     
    </div>
    <div className='row m-5'>
      <div className="col-md-4 align-items-center mt-4" >
        <hr className='w-25' />
<h3>Trending <br />TV <br /> To watch now</h3>
<p className='text-muted'>most watched TV by day</p>
<hr className='w-100' />
      </div>
      {trentingperson.filter((item)=>item.profile_path!==null).slice(0,10).map((item ,index)=> <Mediataype key={index} item={item}/>)}
     
     
    </div>
    {/* <div className='row m-5'>
    <div className="col-md-4 align-items-center mt-4" >
        <hr className='w-25' />
<h3>Trending <br />Movies <br /> To watch now</h3>
<p className='text-muted'>most watched movies by day</p>
<hr className='w-100' />
      </div>
     {trentingperson.filter((pepole)=>pepole.profile_path!==null).map((pepole,index)=>  <div key={index} className="col-md-2">

        <div>
        
        <div className='movies position-relative overflow-hidden'>
        <Link className='text-white' to={`/detalispe/${pepole.id}/${pepole.media_type}`}>
         
          <img className='w-100 m-2'  src={'https://image.tmdb.org/t/p/w500/'+pepole.profile_path} alt="" />
          </Link>
         
          
             </div>
             <div><h6 className='fw-bolder  text-center'>{pepole.name}</h6></div>
        </div>
      
     </div>)}
     </div> */}
    </>
  )
}
