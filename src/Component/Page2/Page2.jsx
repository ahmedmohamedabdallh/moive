import React from 'react'
import ReactPaginate from 'react-paginate'
import Movies from '../Movies/Movies'
function Page2(props) {
    const handlePageClick=(data)=>{
       console.log(data.selected)
            }
            console.log(props.children)
            
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
      
    </>
  )
}

export default Page2
