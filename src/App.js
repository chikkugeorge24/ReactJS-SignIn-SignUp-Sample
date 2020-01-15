  import React from 'react';
  import './App.css';
  import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
  import SignUpForm from './components/SignUpForm';
  import SignInForm from './components/SignInForm';

  function App() {
    return (
      <Router>
        <div className = "App">
          <div className = "App_Leftside"></div>
          <div className = "App_Rightside">
            <div className = "Title">
              <NavLink to = "/sign-in"  activeClassName = "Title_Item_Active" className = "Title_Item">Sign In</NavLink> or <NavLink exact to = "/" activeClassName = "Title_Item_Active" className = "Title_Item">Sign Up</NavLink>
            </div>
            <Route exact path = "/" component = {SignUpForm}>
            </Route>
            <Route path = "/sign-in" component = {SignInForm}>
            </Route>
          </div>
        </div>
      </Router>
    );
  }

  export default App;
