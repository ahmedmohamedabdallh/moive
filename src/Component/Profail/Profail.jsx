import React from 'react'

export default function Profail({userData}) {
    let {frist_name,last_name,age,email} =userData;
  return <>
 <h4>Name : {frist_name} {last_name}</h4>
 <h4>Age : {age}</h4>
 <h4>Email : {email}</h4>
  </>
}
