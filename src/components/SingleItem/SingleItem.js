import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hook/useFirebase';

const SingleItem = () => {
 const { user } = useFirebase()
 const {itemId} =useParams()
 const [item, setItem] = useState({})
 item.email = user?.email
 useEffect(() =>{
  fetch(`http://localhost:5000/singleItem/${itemId}`)
    .then((res) => res.json())
    .then((data) => setItem(data))
 },[])
 const handleOrder = (e) => {
  e.preventDefault()
        fetch('http://localhost:5000/orders', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(item),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
        
 }
 console.log(item)
 return (
  <div>
   <p>This is {itemId} </p>
   <p>also {item.title}</p>
   <p>also {item.email}</p>
   <p>also {item.description}</p>
   <button onClick={handleOrder} className='btn btn-warning'>order</button>
  </div>
 );
};

export default SingleItem;