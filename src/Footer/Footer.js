import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const Footer = () => {
  return (
    <div className='mt-5'>
      <footer>
        <h1>Join Our Newsletter</h1>
        <p>Serving successfully for more than 12 years</p>
        <div className='my-row'>
          <div className='my-col'>
            <h1>EarthTrip</h1>
            <p>
              Our aim is to provide quality services and make
              more people happy.
            </p>
            <span className='pe-3'>
              <FontAwesomeIcon id='facebook' icon={faFacebook} />
            </span>
            <span className='pe-3'>
              <FontAwesomeIcon id='twitter' icon={faTwitter} />
            </span>
            <span className='pe-3'>
              <FontAwesomeIcon id='instagram' icon={faInstagram} />
            </span>
            <span className='pe-3'>
              <FontAwesomeIcon id='linkedIn' icon={faLinkedin} />
            </span>
          </div>
          <div className='my-col'>
            <h4 className='mt-3'>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Services</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className='my-col'>
            <h4 className='mt-3'>Useful Links</h4>
            <ul>
              <li>Premises</li>
              <li>FAQs</li>
              <li>Specialities</li>
            </ul>
          </div>
          <div className='my-col'>
            <h4 className='mt-3'>Contact Us</h4>
            <ul>
              <li>b21,GHK street,Mirpur,Dhaka</li>
              <li>healthylife@ourHospital.com</li>
              <li>+88 123456789</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
