import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route}  from 'react-router-dom';
import App from './components/App';
import Create from './components/Create';
import EditPage from './components/EditPage';
import HelpPage from './components/HelpPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// defining our routes in jsx
const routes = (
  <BrowserRouter>
    <div>
    <Route exact={true} path="/" component={App}/>
    <Route path="/create" component={Create} />
    <Route path="/edit" component={EditPage} />
    <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));