import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/pizza.jpg';

function Home() {
  return (
    <div className="home">
      <div 
          className="headerContainer" 
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
        <h1> Erik's Pizza</h1>
        <p>PIZZA MADE WITH PASSION</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
