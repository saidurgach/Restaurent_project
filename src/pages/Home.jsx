import React from 'react'

import { Link } from 'react-router-dom'
import Banner from '../image/banner.jpeg';
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <>
      <div className='home'style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          

          <Link to="/menu">
          <button>ORDER NOW</button>
          </Link>
        </div>


      </div>
    </>
  )
}

export default Home
