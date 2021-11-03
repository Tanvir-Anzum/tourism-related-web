import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
 const { user } = useAuth()
 const {itemId} =useParams()
 const [item, setItem] = useState({})
 item.email = user?.email
 useEffect(() =>{
  fetch(`https://haunted-hollow-48244.herokuapp.com/singleItem/${itemId}`)
    .then((res) => res.json())
    .then((data) => setItem(data))
 },[])
 const onSubmit = (data) => {
  //  data.preventDefault()
  // console.log(data)
  // console.log(item)
    item.name = data.name
    item.city = data.city
    item.email = data.email
      const confirmBox = window.confirm(
        'Are you sure you want to proceed?'
      )
        // const response = confirm('are you sure to proceed?')
        if(confirmBox === true){
          fetch('https://haunted-hollow-48244.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item),
          })
            .then((res) => res.json())
            .then((result) => console.log(result))
        
        }
      }
 console.log(item)
 return (
   <div className='d-flex row'>
     <div className='col-sm-12 col-md-6'>
       <div className='login-box w-50 m-auto mt'>
         <div className='event-box border border d-flex justify-content-center align-items-center'>
           <div className='login-form'></div>
           <form onSubmit={handleSubmit(onSubmit)}>
             <input
               {...register('name')}
               placeholder='name'
               className='p-2 m-2 w-100'
             />

             <input
               {...register('email')}
               placeholder='email'
               className='p-2 m-2'
               className='p-2 m-2 w-100'
             />
             <input
               {...register('city')}
               placeholder='city'
               className='p-2 m-2'
               className='p-2 m-2 w-100'
             />

             <br />

             {/* <input */}
             {/* {...register('image', { required: true })}
          placeholder='Image Link'
          className='p-2 m-2'
          className='p-2 m-2 w-100' */}

             {errors.exampleRequired && <span>This field is required</span>}

             <input
               type='submit'
               value='Order Item'
               className='btn btn-info w-50'
             />
           </form>
         </div>
       </div>
     </div>
     {/* <p>This is {itemId} </p> */}
     {/* <div> */}
     <div className='col-sm-12 col-md-6'>
       <div className='d-flex justify-content-center mt'>
         <img className='w-50' src={item.image} alt='' />
       </div>
       <p className='mb-1'>title : {item.title}</p>
       <p className='mb-1'>your email : {item.email}</p>
       <p>product description : {item.description}</p>
       {/* <button onClick={handleOrder} className='btn btn-warning'> */}
       {/* order
     </button> */}
     </div>
   </div>
 )
};

export default SingleItem;
