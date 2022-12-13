import React from 'react'
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pepole() {

    let [trenting,setTrenting]=useState([]);
    async function getTringingMoives() {
    let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=339a66b1a1ae200d21f3de51eb57f33d`)
    console.log(data);
    setTrenting(data.results)
       
     }
   
     useEffect(()=>{
       getTringingMoives();
     },[])

 
  return (
    <>
    {trenting.length>0}
    <div className='row m-5'>
      
     {trenting.map((pepole,index)=>  <div key={index} className="col-md-2">

        {pepole.profile_path!=null?<div>
        
        <div className='movies position-relative overflow-hidden'>
        <Link className='text-white' to={`/detalispe/${pepole.id}/${pepole.media_type}`}>
         
          <img className='w-100 m-2'  src={'https://image.tmdb.org/t/p/w500/'+pepole.profile_path} alt="" />
          </Link>
          {/* <div className=' ovarly d-flex align-items-center text-center'>
            <p>{pepole.overview.split(' ').slice(0,10).join(' ')}</p>
          </div> */}
          
             </div>
             <div><h6 className='fw-bolder  text-center'>{pepole.name}</h6></div>
        </div>:""}
      
     </div>)}
    </div>
    </>
  )
}
