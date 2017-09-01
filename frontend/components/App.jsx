import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProjectContainer from "./project/project_container";
import ProjectDetailContainer from './project/project_detail_container';
import UserProfileContainer from './user/user_profile_container';


const App = () => {
  let headerClass = 'header';
  if(window.location.hash === "#/login" || window.location.hash === "#/signup"){
    headerClass = 'hidden';
  }
  return (
  <div>
    <div>
      <header className={headerClass}>
        <div className="globe">
          <GreetingContainer />
        </div>
      </header>
    </div>
      {/* <div className={headerClass}> */}
      {/* <ProjectContainer /> */}
      {/* </div> */}
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      // <Route path='/projects/:projectId' component={ProjectDetailContainer} />
      <Route path='/users/:userId' component={UserProfileContainer} />
      <Route path='/' component={ProjectContainer} />
    </Switch>
  </div>
)};

export default App;
