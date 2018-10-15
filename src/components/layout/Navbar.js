import React from 'react';
import { Link } from 'react-router-dom';
import SingedInLinks from './SingedInLinks';
import SingedOutLinks from './SingedOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
      <nav className="nav-wrapper grey darken-3">
          <div className="container">
              <Link to='/' className="brand-logo">MarioPlan</Link>
              <SingedInLinks />
              <SingedOutLinks />
          </div>
      </nav>

  )
};
const mapStateToProps = (state) =>{
  return {

  }
};

export default connect(mapStateToProps)(Navbar);