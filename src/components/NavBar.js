import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="link">Home</NavLink><br></br>
      <NavLink to="/movies" className="link">Movies</NavLink><br></br>
      <NavLink to="/directors" className="link">Directors</NavLink><br></br>
      <NavLink to="/actors" className="link">Actors</NavLink><br></br>
    </div>
  );
};

export default NavBar;
