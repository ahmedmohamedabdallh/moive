import axios from "axios";
import { createContext ,useState ,useEffect } from "react";
import ReactPaginate from "react-paginate";

export let mediaPage=createContext('')
function MediaPageProvider(props) {
    let [trenting, setTrenting] = useState([]);




  async function getTringingMoives() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=339a66b1a1ae200d21f3de51eb57f33d&language=en-US&page=1`)
    console.log(data);

    setTrenting(data.results)


  }

  useEffect(() => {
    getTringingMoives();

  }, [])
  const fetchTringing = async (currentPage) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=339a66b1a1ae200d21f3de51eb57f33d&language=en-US&page=${currentPage}`)
    return data.results

  }
  const handlePageClick = async (data) => {
    console.log(data.selected)
    let currentPage = data.selected + 1
    const commentFromServer = await fetchTringing(currentPage)
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
           <mediaPage.Provider value={{trenting, setTrenting}}>

{props.children}
    </mediaPage.Provider></>
    )
   
 
    
}
export default MediaPageProvider;