import React from 'react'
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Tv() {

let [trenting,setTrenting]=useState([]);
 async function getTringingtv() {
 let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=339a66b1a1ae200d21f3de51eb57f33d&language=en-US&page=1`)
 console.log(data);
 setTrenting(data.results)
    
  }

  useEffect(()=>{
    getTringingtv();
  },[])
  const fetchTringing= async(currentPage)=>{
    let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=339a66b1a1ae200d21f3de51eb57f33d&language=en-US&page=${currentPage}`)
    return data.results

  }
  const handlePageClick= async(data)=>{
    console.log(data.selected)
    let currentPage=data.selected + 1
    const commentFromServer=await fetchTringing(currentPage)
    setTrenting(commentFromServer)
         };
 
  return (
    
     <>
    
     
    
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={null}
      pageCount={30}
      marginPagesDisplayed={null}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    <div className='row m-5'>
    
     {trenting.map((tv,index)=>  <div key={index} className="col-md-2">
      <div>
      <div className='movies position-relative overflow-hidden'>
        <img className='w-100 m-2'  src={'https://image.tmdb.org/t/p/w500/'+tv.poster_path} alt="" />
        <Link className='text-white' to={`/detalis/${tv.id}/${tv.media_type}`}>
        <div className=' ovarly d-flex align-items-center text-center'>
          <p>{tv.overview.split(' ').slice(0,10).join(' ')}</p>
        </div>
        </Link>
        <div className="vote mt-2">{tv.vote_average.toFixed(1)}</div>
           </div>
           <div><h6 className='fw-bolder  text-center'>{tv.name}</h6></div>
      </div>
     </div>)}
    </div>
    </>
  )
}

