import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
const Orders = () => {
   const [order, setOrder] = useState([])

   const [control, setConrol] = useState(false)

   useEffect(() => {
    //  fetch('https://haunted-hollow-48244.herokuapp.com/orders')
     fetch('https://haunted-hollow-48244.herokuapp.com/orders')
       .then((res) => res.json())
       .then((data) => setOrder(data))
   }, [control])

   const handleDelete = (id) => {
    //  fetch(`https://haunted-hollow-48244.herokuapp.com/deleteOrder/${id}`, {
     fetch(`https://haunted-hollow-48244.herokuapp.com/${id}`, {
       //  fetch(`https://localhost:5000/deleteEvent/${id}`, {
       method: 'DELETE',
       headers: { 'content-type': 'application/json' },
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.deletedCount) {
           console.log(data.deletedCount)
           setConrol(!control)
         } else {
           setConrol(false)
         }
       })
     console.log(id)
   }

   return (
     <div className='container'>
       <h3 className='mt-5 mb-5'>All Orders : {order.length}</h3>

       <Table striped bordered hover>
         <thead>
           <tr>
             <th>#</th>
             <th>Name</th>
             <th>Email</th>
             <th>City</th>
             {/* <th>Image Link</th> */}
             <th>Action</th>
           </tr>
         </thead>
         {order?.map((pd, index) => (
           <tbody>
             <tr>
               <td>{index}</td>
               <td>{pd.name}</td>
               <td>{pd.email}</td>
               <td>{pd.city}</td>
               {/* <td>{pd.image}</td> */}
               <button
                 onClick={() => handleDelete(pd._id)}
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
}

export default Orders;