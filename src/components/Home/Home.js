import React, { useEffect, useState } from "react";
import Placed from "../Placed/Placed";
import "./Home.css";

const Home = () => {
  const [event, setEvent] = useState([])
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetch('http://localhost:5000/allEvents')
      .then((res) => res.json())
      .then((data) => setEvent(data))
  }, [])
  const handleSearch = () => {
    fetch(`http://localhost:5000/searchEvent?search=${search}`)
      .then((res) => res.json())
      .then((result) => setEvents(result));

    console.log("hello bro");
  };

  console.log(search);
  console.log(event);
  return (
    <div>
      <div className='users'>
        {event.map((user) => (
          <li>
            <Placed ser={user}></Placed>
          </li>
        ))}
      </div>
      <div className='events-container'>
        <div className='row container'>
          {events?.map((pd) => (
            <div className='col-md-4'>
              <div className='event border border'>
                <div className='event-img'>
                  <img className='w-100' src={pd.image} alt='' />
                </div>
                <div
                  style={{ backgroundColor: pd?.EventColor }}
                  className='title-container p-2 '
                >
                  <h4>{pd.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Home;
