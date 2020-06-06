import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import homePage from "./pages/homePage.js";
import workshopsPage from "./pages/workshopsPage.js";
import workshopPage from "./pages/workshopPage.js";


function App() {
  
  return (
 
    <Router>
        <Switch>
          <Route exact path='/' component={homePage} />
          <Route exact path='/workshop/:workshop' component={workshopPage} />
          <Route exact path='/workshops' component={workshopsPage} />
          {/* <Route path="/sign-in" component={Login} />
          <Route path="/item-list" component={ItemsList} />
          <Route path="/sign-up" component={SignUp} /> */}
        </Switch>
        
    </Router>
  );
}

export default App;
