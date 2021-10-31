import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Menubar.css";
// import logo from "../../../images/Banner&Background/logo.png";
// import useFirebase from './../../Hook/useFirebase';

const Menubar = () => {
  // const { user } = useFirebase();
  const { user, handleLogout } = useFirebase();
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='items p-2'>
                <Link className='items p-2' to='/home'>
                  Home
                </Link>
              </li>
              <li className='items p-2'>
                <Link className='items p-2' to='/Donation'>
                  Donation
                </Link>
              </li>
              {/* <li class='nav-item dropdown'>
                <a
                  class='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a> */}
              {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
              {/* </li> */}
              <li className='items p-2'>
                <Link className='items p-2' to='/orders'>
                  Orders
                </Link>
              </li>
              <li className='items p-2'>
                <Link className='items p-2' to='/myEvents'>
                  myEvents
                </Link>
              </li>
              <Link to='/adminDashboard'>
                <button className='items btn btn-primary p-1 '>Admin</button>
              </Link>
              {user.email ? (
                <Link to='/admin'>
                  <button
                    onClick={handleLogout}
                    className='items btn btn-info p-1 '
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to='/registerVolunteer'>
                  <button className='items btn btn-info p-1 '>Register</button>
                </Link>
              )}
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
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
