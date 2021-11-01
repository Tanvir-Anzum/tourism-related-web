import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleItem = () => {
 const { user } = useAuth()
 const {itemId} =useParams()
 const [item, setItem] = useState({})
 item.email = user?.email
 useEffect(() =>{
  fetch(`https://haunted-hollow-48244.herokuapp.com/singleItem/${itemId}`)
    .then((res) => res.json())
    .then((data) => setItem(data))
 },[])
 const handleOrder = (e) => {
  // e.preventDefault()
      const confirmBox = window.confirm(
        'Are you sure you want to proceed?'
      )
        // const response = confirm('are you sure to proceed?')
        if(confirmBox === true){
          fetch('https://haunted-hollow-48244.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item),
          })
            .then((res) => res.json())
            .then((result) => console.log(result))
        
        }
 }
 console.log(item)
 return (
   <div>
     {/* <p>This is {itemId} </p> */}
     <div className='d-flex justify-content-center mt-5 pt-5'>
       <img className='w-25' src={item.image} alt='' />
     </div>
     <p>title : {item.title}</p>
     <p>your email : {item.email}</p>
     <p>product description : {item.description}</p>
     <button onClick={handleOrder} className='btn btn-warning'>
       order
     </button>
   </div>
 )
};

export default SingleItem;