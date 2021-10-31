import React from 'react';
import { Link } from 'react-router-dom';

const Placed = (props) => {
 const { _id, description,image,title } = props.ser
 return (
   <div>
     <h5>{description}</h5>
     <p>{title}</p>
     <img src={image} alt='' />
     <Link to={`/singleItem/${_id}`}>
       <button className='btn btn-danger'>place order</button>
     </Link>
   </div>
 )
};

export default Placed;