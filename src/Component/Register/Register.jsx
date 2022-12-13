import axios, { Axios } from 'axios';
import Joi, { allow } from 'joi';
import React , { useState }  from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [errorList,seterrorList]=useState([]);
let ahmed = useNavigate();
let mm = useNavigate();
    const [logain,setLogain]=useState(false);
const [error,seterror] = useState('')
let [user ,setUser] = useState({
    frist_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''
});

function getUserData(e) {
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
   setUser( myUser);
   
}

 async function sendData() {
  let {data} = await axios.post(`https://route-movies-api.vercel.app/signup`, user);
  console.log(data.message)
  if (data.message == 'success') {
    setLogain(false)
    ahmed('/login')
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
    frist_name:Joi.string().min(3).max(10).required(),
    last_name:Joi.string().min(3).max(10).required(),
    age:Joi.number().min(16).max(80).required(),
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
   
    <label htmlFor="frist_name">frist_name :</label>
    <input onChange={getUserData} type="text" className='form-control my-input my-2' name='frist_name' id='frist_name' />

    <label htmlFor="frist_name">last_name :</label>
    <input onChange={getUserData} type="text" className='form-control my-input my-2' name='last_name' id='last_name' />
    
    <label htmlFor="frist_name">age :</label>
    <input onChange={getUserData} type="number" className='form-control my-input my-2' name='age' id='age' />

    <label htmlFor="email">email :</label>
    <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id='email' />

    <label htmlFor="password">password :</label>
    <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id='password' />

    <button type='submit' className='btn btn-info'>
        {logain==true?<i className='fas fa-spinner fa-spin'></i>:'Register'}
    </button>
   
  </form>
  </>
}
