import React from 'react'
import { Link } from 'react-router-dom';

export default function Mediataype({item}) {
  return (
    <>
    <div  className="col-md-2">
      <div>
      <div className='movies position-relative overflow-hidden'>
        {item.poster_path? <img className='w-100 m-2'  src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} alt="" />
        :<img className='w-100 m-2'  src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} alt="" />}
       
        

{item.media_type?<Link className='text-white' to={`/detalis/${item.id}/${item.media_type}`}>
    {item.overview?<div className=' ovarly d-flex align-items-center text-center'>
          <p>{item.overview.split(' ').slice(0,10).join(' ')}</p>
        </div>:""}
        
        </Link>:<Link className='text-white' to={`/detalis/${item.id}`}>
    {item.overview?<div className=' ovarly d-flex align-items-center text-center'>
          <p>{item.overview.split(' ').slice(0,10).join(' ')}</p>
        </div>:""}
        
        </Link>}

        {item.vote_average && <div className="vote mt-2">{item.vote_average?.toFixed(1)}</div>}
        
       <div className="media">{item.media_type}</div>
        
           </div>
           
           <div><h3 className='fw-bolder h6  text-center'>{item.title} {item.name}</h3></div>
      </div>
     </div>
    </>
  )
}
