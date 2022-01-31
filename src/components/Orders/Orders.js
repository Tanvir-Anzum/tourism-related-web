import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import Menubar from '../Menubar/Menubar';
const Orders = () => {
   const [order, setOrder] = useState([])

   const [control, setControl] = useState(false)

   useEffect(() => {
     fetch('https://haunted-hollow-48244.herokuapp.com/orders')
    //  fetch('https://localhost:5000/orders')
       .then((res) => res.json())
       .then((data) => setOrder(data))
   }, [])

   
  //  // const response = confirm('are you sure to proceed?')
    const handleDeleteUser = (id) => {
      // const confirmBox = window.confirm('Are you sure you want to delete?')
      // if (confirmBox === true) {
      fetch(`https://haunted-hollow-48244.herokuapp.com/orders/${id}`, {
        method: 'DELETE',     
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log(data.deletedCount)
            // setControl(!control)
            const remains = order.filter((ord) => ord._id != id)
            setOrder(remains)
          } else {
            console.log(data.deletedCount)
            // setControl(false)
          }
        })
    }
    

   return (
     <div className=''>
       <h3 className='mt-5 mb-5'>All Orders : {order.length}</h3>

       <Table striped bordered hover>
         <thead>
           <tr>
             {/* <th>#</th> */}
             {/* <th>Service id</th> */}
             <th>Service Name</th>
             <th>User Name</th>
             <th>User Email</th>
             <th>City</th>
             {/* <th>Image Link</th> */}
             <th>Action</th>
           </tr>
         </thead>
         {order?.map((pd, index) => (
           <tbody>
             <tr>
               {/* <td>{pd._id}</td> */}
               <td>{pd.title}</td>
               <td>{pd.name}</td>
               <td>{pd.email}</td>
               <td>{pd.city}</td>
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
}

export default Orders;
