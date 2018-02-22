import React from 'react';
import { Link, NavLink }  from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <h1>Header(Expensify)</h1>
    <ul className="Header__nav">
      <li><NavLink exact={true} to="/" activeClassName="is-active">Home</NavLink></li>
      <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
      <li><NavLink to="/create" activeClassName="is-active">Creat Expense</NavLink></li>
      <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>    
    </ul>
  </div>
);

export default Header;