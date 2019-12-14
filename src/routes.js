import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';

import {
  UserEnquiries
} from './component/userEnquiries';
import {
    Courses
  } from './component/courses';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Courses} />
    <Route path="/userEnquiries" component={UserEnquiries} />
   
  </Route>
);

export default routes;
