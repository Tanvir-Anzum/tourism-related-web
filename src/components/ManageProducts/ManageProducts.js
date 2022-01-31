import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const ManageProducts = () => {
 const [product, setProduct] = useState([])
 // const [control, setControl] = useState(false)

 useEffect(() => {
   fetch('https://haunted-hollow-48244.herokuapp.com/allEvents')
     //  fetch('https://localhost:5000/orders')
     .then((res) => res.json())
     .then((data) => setProduct(data))
 }, [])

 const handleDeleteUser = (id) => {
   // const confirmBox = window.confirm('Are you sure you want to delete?')
   // if (confirmBox === true) {
   fetch(`https://haunted-hollow-48244.herokuapp.com/allEvents/${id}`, {
     method: 'DELETE',
   })
     .then((res) => res.json())
     .then((data) => {
       if (data.deletedCount) {
         console.log(data.deletedCount)
         // setControl(!control)
         const remains = product.filter((ord) => ord._id != id)
         setProduct(remains)
       } else {
         console.log(data.deletedCount)
         // setControl(false)
       }
     })
 }
 return (
   <div>
     <h3 className='mt-5 mb-5'>All Products : {product.length}</h3>

     <Table striped bordered hover>
       <thead>
         <tr>
           {/* <th>#</th> */}
           {/* <th>Service id</th> */}
           <th>Product Name</th>
           {/* <th>Image Link</th> */}
           <th>Action</th>
         </tr>
       </thead>
       {product?.map((pd, index) => (
         <tbody>
           <tr>
             {/* <td>{pd._id}</td> */}
             <td>{pd.title}</td>
             {/* <td>{pd.image}</td> */}
             <button
               onClick={() => handleDeleteUser(pd._id)}
               className='btn bg-warning p-2'
             >
               Delete
             </button>
           </tr>
         </tbody>
       ))}
     </Table>
   </div>
 ) 
};

export default ManageProducts;