import React from 'react';
import ReactDOM from 'react-dom';

//! Higher order component - A component that renders another component
//* Reuse code
//* Render Hijacking
//* Prop Manipulation 
//* Abstract state 

const Info = (props) => (
  <div>
    <h1>User Info</h1>
    {props.isAuthenticated ?  <p> This is your info {props.info}</p> : <p>Please log in</p> }
  </div>
);

const adminWarning = (WrappedComponent) => {
  return (props) => (
  <div>
    { props.isAdmin && <p>This is private info!</p> }
    <WrappedComponent  {...props}/>
  </div>
  )};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? 
      <div>
        <p>You are logged in!</p>
        <WrappedComponent {...props}/>
      </div>
      : 
      <div>
        <WrappedComponent {...props}/>
      </div>
      }
    </div>
  );
}

const AdminInfo = adminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// setup authinfo to show if user is authenticated or when they are not 


ReactDOM.render(<AuthInfo isAuthenticated={true} info= "Geralds personal info!"/>, document.getElementById('app'));