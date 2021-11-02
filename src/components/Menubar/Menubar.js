import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Menubar.css";
// import logo from "../../../images/Banner&Background/logo.png";


const Menubar = () => {
  // const { user } = useFirebase();
  const { user, logOut } = useAuth()
  return (
    <div className='container-fluid '>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3 '>
        <div className='container-fluid'>
          {/* <a className='navbar-brand' href='#'>
            Navbar
          </a> */}
          {/* <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button> */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item p-2 nav-link active'>
                <Link className='nav-link p-2' to='/home'>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a> */}
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
              {/* </li> */}
              <li className='nav-item p-2'>
                <Link className='nav-link p-2' to='/orders'>
                  Manage Orders
                </Link>
              </li>
              <li className='nav-item p-2'>
                <Link className='nav-link p-2' to='/MyEvents'>
                  myOrders
                </Link>
              </li>
              <li className='nav-item p-2'>
                <Link className='nav-link p-2' to='/services'>
                  Services
                </Link>
              </li>
              <Link to='/adminDashboard'>
                <button className='items btn btn-primary p-1 '>Admin</button>
              </Link>
              {/* {user.email ? (
                <Link className='nav-link p-2'>
                  <button
                    onClick={logOut}
                    className='nav-item btn btn-warning p-1 '
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to='/login'>
                  <button className='items btn btn-info p-1 '>Register</button>
                </Link>
              )} */}
              {user?.email ? (
               
                <button
                  className='nav-item btn btn-warning p-1 '
                  onClick={logOut}
                >
                  Logout
                </button>
                
              ) : (
                <Link to='/login'>
                  <button className='items btn btn-info p-1 '>Register</button>
                </Link>
              )}
              <Link className='nav-link' to='/admin'>
                <li className=''>{user?.email}</li>
              </Link>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Menubar;
