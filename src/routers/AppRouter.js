import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink }  from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import Create from '../components/Create';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';


// :id used to created key value pairs
const AppRouter = (props) => (
  <BrowserRouter>
    <div>
    <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashBoard}/>
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;