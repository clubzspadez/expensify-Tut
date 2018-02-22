import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink }  from 'react-router-dom';
import AppRouter from './routers/AppRouter.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// defining our routes in jsx
const NotFound = () => (
  <div>
  {/* Helps with client side rendering */}
   404 - <Link to="/">Home Page</Link>
  </div>
);


ReactDOM.render(<AppRouter notFound={NotFound}/>, document.getElementById('app'));