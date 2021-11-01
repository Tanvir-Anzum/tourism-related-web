import React, { useEffect, useState } from "react";
import tourism from '../../Images/tourism.jpg'
import Placed from '../Placed/Placed'
import './Home.css'

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
    <div className='container-fluid '>
      <div className='d-flex align-items-center row background'>
        <div className='col-sm-12 col-md-6'>
          <h1>Begin Your Journey With Us</h1>
          <h5>
            We are providing high quality service with low cost.We are commited
            to provide you the best service.
          </h5>
          <button className='btn btn-primary'>Learn More</button>
        </div>
        <div className='col-sm-12 col-md-6'>
          <img className='img-fluid' src={tourism} alt='' />
        </div>
      </div>
      <h3 className='mt-5 mb-5'>Our Services</h3>
      <div className='row'>
        {event.map((user) => (
          <div className='users col-sm-12 col-md-6 mb-3'>
            <Placed ser={user}></Placed>
          </div>
        ))}
      </div>

        {/* <div className='events-container'>
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
      </div>  */}
    </div> 
  )
};

export default Home;
