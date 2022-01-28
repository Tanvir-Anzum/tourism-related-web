import React, { useEffect, useState } from 'react';
import Menubar from '../Menubar/Menubar';
import PlacedServices from '../PlacedServices/PlacedServices';
// import PlacedServices from '../PlacedServices/PlacedServices'
const Services = () => {
 const [event, setEvent] = useState([])
   useEffect(() => {
     fetch('https://haunted-hollow-48244.herokuapp.com/allEvents')
       .then((res) => res.json())
       .then((data) => setEvent(data))
   }, [])
   console.log(event)
 return (
   <div>
     <Menubar></Menubar>
     <div className='row'>
       {event.map((user) => (
         <div className='users col-sm-12 col-md-6 mb-3'>
           {/* <PlacedServices ser={user}></PlacedServices> */}
           <PlacedServices ser={user}></PlacedServices>
         </div>
       ))}
     </div>
   </div>
 )
};

export default Services;