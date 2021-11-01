import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import './MyEvents.css'

const MyEvents = () => {
  // const { user } = useFirebase();
  // const [events, setEvents] = useState([]);
  //   // fetch("http://localhost:5000/addEvent", {
  //   //   method: "POST",
  //   //   headers: { "content-type": "application/json" },
  //   //   body: JSON.stringify(data),
  //   // })
  // //     .then((res) => res.json())
  // //     .then((result) => console.log(result));
  // //  console.log(data)
  const { user } = useAuth()
  const [events, setEvents] = useState([])
   const [control, setConrol] = useState(false)

  useEffect(() => {
    // fetch(`http://localhost:5000/orders/${myUser}`)
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
     .then((data) => setEvents(data))
  }, [user?.email])
 
  console.log(events)
  console.log(events)
  console.log(user.email)
 
   const handleDelete = (id) => {
  //    fetch(`http://localhost:5000/deleteOrder/${id}`, {
  //      method: 'DELETE',
  //      headers: { 'content-type': 'application/json' },
  //  })
  //      .then((res) => res.json())
  //      .then((data) => {
  //        if (data.deletedCount) {
  //          console.log(data.deletedCount)
  //          setConrol(!control)
  //        } else {
  //          console.log(data.deletedCount)
  //          setConrol(false)
  //        }
      //  })}
  //    console.log(id)
   }


  // useEffect(() => {
  //   fetch(`http://localhost:5000/orders/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setEvents(data))
  // }, [user.email])

  // let container = events
  // console.log(events);
  return (
    <div className='responsive'>
      <h1>My events : {events.length}</h1>
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
        {events.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.title}</td>
              <td>{pd.description}</td>
              <td>{pd.image.slice(0, 20)}</td>
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
