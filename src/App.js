import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './About';
import User from './User';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    const {isAuthenticated} = this.props.auth0
    
    return (
      <>
        <Router>
          <Header />
          <Routes>
            
            <Route 
              exact path="/"
              element={isAuthenticated ? <BestBooks /> : <Welcome />}></Route>
            
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route
              path="About"
              element={<Profile/>}>
            </Route>

            <Route
            path="Profile"
            element={<User/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
