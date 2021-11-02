import React from 'react';
import { Link } from 'react-router-dom';
import './placed.css'

const Placed = (props) => {
 const { _id, description,image,title } = props.ser
 return (
   <div className='size'>
     <img src={image} alt='' />
     <p>{title}</p>
     <h5>{description}</h5>
     <Link to={`/singleItem/${_id}`}>
       <button className='btn btn-danger'>Details</button>
     </Link>
   </div>
 )
};

export default Placed;