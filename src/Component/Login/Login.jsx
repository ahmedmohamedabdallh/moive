import axios, { Axios } from 'axios';
import Joi, { allow } from 'joi';


import React , { useState }  from 'react'
import { useNavigate } from 'react-router-dom';




export default function Login({saveUserData}) {
  const [errorList,seterrorList]=useState([]);
let ahmed = useNavigate();

    const [logain,setLogain]=useState(false);
const [error,seterror] = useState('')
let [user ,setUser] = useState({

    email:'',
    password:''
});



function getUserData(e) {
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
   setUser( myUser);
   
}

 async function sendData() {
  let {data} = await axios.post(`https://route-movies-api.vercel.app/signin`, user);
  console.log(data.message)
  if (data.message == 'success') {
    localStorage.setItem("userToken",data.token)
    setLogain(false)
    saveUserData();
    ahmed('/');
  }
  else{
    setLogain(false)
    seterror(data.message)
    

  }
    
}

function submitData(e) {
    setLogain(true)
    e.preventDefault();
   
   let validation = validateRegastier();
   if (validation.error) {
    setLogain(false)
    seterrorList(validation.error.details)
   }
   else{
       sendData();
   }
}


function validateRegastier() {
 let schema = Joi.object({
 
    email:Joi.string().email({maxDomainSegments:2,tlds:{allow:['com','net']}}).required(),
    password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required(),

  });
return schema.validate(user,{abortEarly:false})
}

  return <>

  {errorList.map((err,index)=>{
if (err.context.label === 'password') {
 return <div key={index} className='alert alert-danger my-2'>password invalid</div>
}
else{
 return <div key={index} className='alert alert-danger my-2'>{err.message}</div>
}
  }) }
   {error.length >0 ?<div className='alert alert-danger my-2'>{error}</div>:''}
  <form onSubmit={submitData} >

    <label htmlFor="email">email :</label>
    <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id='email' />

    <label htmlFor="password">password :</label>
    <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id='password' />

    <button type='submit' className='btn btn-info'>
        {logain==true?<i className='fas fa-spinner fa-spin'></i>:'Login'}
    </button>
    <div >

   
   

 
    
    </div>
  </form>
  </>
}
