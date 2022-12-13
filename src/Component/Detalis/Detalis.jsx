import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Detalis() {

    let x=useParams()
    let [detal,setdetal]=useState('');
    async function getDetalis(id,mediaType) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=339a66b1a1ae200d21f3de51eb57f33d`)
    console.log(data);
    setdetal(data)
       
     }
   
     useEffect(()=>{
       getDetalis(x.id,x.media);
     },[])

  return (
   <>
   {detal?<div className='container'>
    <div className='row'>
        <div className="col-md-4">
            <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+detal.poster_path} alt="" />
        </div>
        <div className="col-md-8">
            <h2>{detal.title} {detal.name}</h2>
            {detal.genres.map((value,index)=><span key={index} className='badge bg-info p-2 mx-2'>{value.name}</span>)}
       <ul className='list-unstyled m-3'>
        <li > <span className='mx-2'>vote :</span>{detal.vote_average.toFixed(1)}</li>
        <li> <span className='mx-2'>vote count :</span>{detal.vote_count}</li>
        <li> <span className='mx-2'>popularity :</span>{detal.popularity}</li>
        <li> <span className='mx-2'>release date :</span>{detal.release_date}</li>
       </ul>
    
       <p className='text-muted m-2'>{detal.overview}</p>
        </div>
    </div>

   </div>:''}
   </>
  )
}
