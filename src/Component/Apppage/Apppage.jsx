import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

export default function Apppage() {
    const [currentPage,setcurrentPage]=useState(1)
  return (
  <>
<ReactPaginate
currentPage={currentPage}
total={500}
limit={20}
onPageChange={(page)=>setcurrentPage(page)}
/>
  </>
  )
}
