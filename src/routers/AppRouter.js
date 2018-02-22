import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink }  from 'react-router-dom';
import Header from '../components/Header';
import App from '../components/App';
import Create from '../components/Create';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

const AppRouter = (props) => (
  <BrowserRouter>
  <div>
  <Header />
    <Switch>
      <Route exact={true} path="/" component={App}/>
      <Route path="/create" component={Create} />
      <Route path="/edit" component={EditPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;