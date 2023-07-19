import React from 'react';
import companyLogo from '../Images/CompanyLogo1.png';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <div className='nav-bar'>
      <div>
        <img src={companyLogo} alt='celebal Logo'/>
      </div>
      <div className='nav-details' >
      <NavLink to="/" activeClassName="active">
          <button>
            Home
          </button>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <button>
            About Us
          </button>
        </NavLink>
        <NavLink to="/careers" activeClassName="active">
          <button>
            Careers
          </button>
        </NavLink>
        <NavLink to="/life@celebal" activeClassName="active">
          <button>
          Life@celebal
          </button>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <button>
          Get in Touch
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default MainNav
