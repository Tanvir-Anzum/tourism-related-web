import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
const Orders = () => {
   const [event, setEvent] = useState([])

   const [control, setConrol] = useState(false)

   useEffect(() => {
     fetch('https://haunted-hollow-48244.herokuapp.com/allEvents')
       .then((res) => res.json())
       .then((data) => setEvent(data))
   }, [control])

   const handleDelete = (id) => {
     fetch(`https://haunted-hollow-48244.herokuapp.com/deleteEvent/${id}`, {
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
       <h1>All Orders : {event.length}</h1>

       <Table striped bordered hover>
         <thead>
           <tr>
             <th>#</th>
             <th>Event Title</th>
             <th>Event description</th>
             <th>Image Link</th>
             <th>Action</th>
           </tr>
         </thead>
         {event?.map((pd, index) => (
           <tbody>
             <tr>
               <td>{index}</td>
               <td>{pd.title}</td>
               <td>{pd.description}</td>
               <td>{pd.image}</td>
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