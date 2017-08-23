import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  let headerClass = 'header';
  if(window.location.hash === "#/login" || window.location.hash === "#/signup"){
    headerClass = 'hidden';
  }
  return (
  <div>
    <header className={headerClass}>
      <Link to='/' >
      <img src={ window.staticImages.logo }  alt="logo" className="logo" />
      </Link>
      <GreetingContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
)};

export default App;
