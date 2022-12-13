import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detalispep() {

    let n=useParams();
    let[detalisper,setdetalisper]=useState('')
    async function getDetalisper(id,mediaType) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=339a66b1a1ae200d21f3de51eb57f33d`)
        console.log(data);
        setdetalisper(data)
           
         }
         useEffect(()=>{
            getDetalisper(n.id,n.media);
          },[])
     
  return (
    <div>
      <>
      {detalisper?<div className='container'>
    <div className='row'>
        <div className="col-md-4">
            <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+detalisper.profile_path} alt="" />
        </div>
        <div className="col-md-8">
            <h2> {detalisper.name}</h2>
            

          <a className='bg-info text-center p-2 text-white' href={`${detalisper.homepage}`} target="_blank">Home Bage</a>
       <ul className='list-unstyled m-3'>
        <li > <span className='mx-2'>popularit :</span>{detalisper.popularity}</li>
        {detalisper.gender ==1?<li> <span className='mx-2'>gender : Female</span></li>:'gender : Male'}
        
        <li> <span className='mx-2'>place of birth :</span>{detalisper.place_of_birth}</li>
        <li> <span className='mx-2'>birthday :</span>{detalisper.birthday}</li>
       </ul>
    
       <p className='text-muted m-2'>{detalisper.overview}</p>
        </div>
    </div>

   </div>:''}
      </>
    </div>
  )
}
