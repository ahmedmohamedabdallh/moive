import axios from "axios";
import { createContext , useState,useEffect} from "react";


export  let mediaContext=createContext('');
function MediaContextProvider(props) {
    let [trenting,setTrenting]=useState([]);
const [trentingtv,setTrentingtv]=useState([]);
const [trentingperson,setTrentingperson]=useState([]);
 async function getTringingMoives(mediaType ,callback) {
 let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=339a66b1a1ae200d21f3de51eb57f33d`)
 console.log(data);
callback(data.results);
    
  }
 
  

  useEffect(()=>{
    getTringingMoives('movie',setTrenting);
    getTringingMoives('tv',setTrentingtv);
    getTringingMoives('person',setTrentingperson);
  },[])

    return <mediaContext.Provider value={{trenting,trentingtv,trentingperson}}>
{props.children}
    </mediaContext.Provider>
    
}
export default MediaContextProvider;