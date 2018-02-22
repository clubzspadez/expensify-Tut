import React from 'react';
import { Link, NavLink }  from 'react-router-dom';

const NotFound = () => (
  <div>
  {/* Helps with client side rendering */}
   404 - <NavLink to="/">Home Page</NavLink>
  </div>
);

export default NotFound;