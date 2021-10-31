import React, { useState } from "react";
import useFirebase from "../../Hook/useFirebase";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

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
  const { user } = useFirebase()
  const [events, setEvents] = useState([])
  const myUser = user.email
  useEffect(() => {
    // fetch(`http://localhost:5000/orders/${myUser}`)
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
     .then((data) => setEvents(data))
  }, [myUser])

  console.log(events)
  

  // useEffect(() => {
  //   fetch(`http://localhost:5000/orders/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setEvents(data))
  // }, [user.email])

  // let container = events
  // console.log(events);
  return (
    <div>
      <h1>My evtns : {events.length}</h1>
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
        {events.map((pd,index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.title}</td>
              <td>{pd.description}</td>
              <td>{pd.image}</td>
              <button
                
                className='btn bg-danger p-2'
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
