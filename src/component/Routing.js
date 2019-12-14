import React,{Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import App from '../App';
import UserEnquiries from './userEnquiries';
import coursesComp from './courses';


class Routing extends Component {
    render(){
        return(
            <Router >
            <div className="parent">
              <App/>
              <Route exact path="/" component={coursesComp} />
              <Route exact path="/userEnquiries" component={UserEnquiries} />
            </div>
          </Router>
        )
    }
}

export default Routing