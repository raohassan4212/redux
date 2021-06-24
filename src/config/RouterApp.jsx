import {
    BrowserRouter as Router,
  
    Route,
    
  } from "react-router-dom";

import Home from "../screens/Home";
import Contact from '../screens/Contact';
import About from '../screens/About';
import NotFound from '../screens/NotFound';
import Profile from "../screens/Profile";

  const RouterApp = () => {
      return (
          <div>
              <Router>
                  <Route exact path='/' component={Home} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/about' component={About} />
                  <Route path='/notFound' component={NotFound} />
                  <Route path='/profile/:id/:userName' component={Profile} />
              </Router>
          </div>
      );
  }

  export default RouterApp;