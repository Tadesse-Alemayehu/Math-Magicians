import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // [{ name: Home, link: '/' }];
  return (
    <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Calculator">Calculator</NavLink>
      <NavLink to="/Quote">Quotes</NavLink>
    </ul>
  );
}
