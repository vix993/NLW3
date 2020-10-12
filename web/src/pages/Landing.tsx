import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div id="page-landing" className="App">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Bring happiness to the world</h1>
          <p>Make a childs day by visiting an orphanage.</p>
        </main>
        <div className="location">
          <strong>London</strong>
          <span>UK</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;