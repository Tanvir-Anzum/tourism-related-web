import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Menubar from "../Menubar/Menubar";
import './MyEvents.css'

const MyEvents = () => {
  // const { user } = useFirebase();
  // const [events, setEvents] = useState([]);
  //   fetch("http://localhost:5000/addEvent", {
  //   //   method: "POST",
  //   //   headers: { "content-type": "application/json" },
  //   //   body: JSON.stringify(data),
  //   // })
  // //     .then((res) => res.json())
  // //     .then((result) => console.log(result));
  // //  console.log(data)
  const { user } = useAuth()
  const [events, setEvents] = useState([])
  const [order, setOrder] = useState([])
   

  useEffect(() => {
    // fetch(`http://localhost:5000/orders/${myUser}`)
    // fetch(`https://haunted-hollow-48244.herokuapp.com/orders/${user?.email}`)/haunted-hollow-48244.herokuapp.com
    fetch(`https://haunted-hollow-48244.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [user?.email])
 
    const handleDelete = (id) => {
      // fetch(`https://haunted-hollow-48244.herokuapp.com/deleteOrder/${id}`, {
      fetch(`https://haunted-hollow-48244.herokuapp.com/deleteOrder/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log(data.deletedCount)
            const remains = order.filter((ord) => ord._id != id)
            setOrder(remains)
          } else {
            // setConrol(false)
          }
        })
    }

  return (
    <div className='responsive'>
     
      <h3 className='mt-5 mb-5'>My Orders : {events.length}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Service Description</th>
            <th>My Name</th>
            <th>My Email</th>
            <th>City</th>
            {/* <th>Image Link</th> */}
            <th>Action</th>
          </tr>
        </thead>
        {events.map((pd, index) => (
          <tbody>
            <tr>
              <td>{pd.title}</td>
              <td>{pd.description}</td>
              <td>{pd.name}</td>
              <td>{pd.email}</td>
              <td>{pd.city}</td>
              {/* <td>{pd.image.slice(0, 20)}</td> */}
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
};

export default MyEvents;
