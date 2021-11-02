import React from "react";

import { Link, useLocation, useHistory } from 'react-router-dom'
import "./Login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth()
  // console.log(handleGoogleLogin());
   const location = useLocation()
   
   const history = useHistory()
   const redirect_uri = location.state?.from || '/home'
  
   console.log(redirect_uri)
   const handleGoogleLogin = () => {
     signInUsingGoogle().then((result) => {
       history.push(redirect_uri)
      // history.push('/orders')
      //  console.log(redirect_uri)
      //  console.log(result)
     })
   }

  return (
    <div>
      <div className='d-flex justify-content-center mt-5 pt-5 mb-5 text-primary'>
        <h1>Please Log In</h1>
      </div>
      <div className="login-box w-25 m-auto mb-5 pb-5">
         <button className='btn btn-primary' onClick={handleGoogleLogin}>
       Google Sign In
     </button>
      </div>
    </div>
  );
};

export default Login;
