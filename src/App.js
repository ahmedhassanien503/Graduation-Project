import React from 'react';
import './App.css';

import HeaderSection from './components/HeaderSection.js';
import FooterSection from './components/FooterSection.js';
import RecipeSection from './components/RecipeSection.js';
import RecipeSliderSection from './components/RecipeSliderSection.js';
import SeasonSection from './components/SeasonSection.js';
import MainSection from './components/MainSection.js';
import SocialSection from './components/SocialSection.js';
import NavbarSection from './components/NavbarSection.js';
import SidebarSection from './components/SidebarSection.js';
import HeadlineSection from './components/HeadlinesSection.js';
import SinglepageSection from './components/SinglepageSection.js';
import ChefSection from './components/ChefSection.js';
import NavHeaderSection from './components/NavHeaderSection.js';
import Form from './components/Form.js';
import AllrecipesSection from './components/AllrecipesSection.js'

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import homePage from "./pages/homePage.js";
import workshopsPage from "./pages/workshopsPage.js";
import workshopPage from "./pages/workshopPage.js";
import allChefs from "./pages/allChefs.js";
import chefProfile from "./pages/chefProfile.js";
import seasonalrecipesPage from "./pages/seasonalrecipesPage.js";
import Chef from "./pages/editChefProfile.js";


function App() {
  
  return (
  
    
<div>
  
   
  <Router>
  <Switch>
    <Route exact path='/' component={homePage} />
    <Route exact path='/workshop/:workshop' component={workshopPage} />
    <Route exact path='/workshops' component={workshopsPage} />
    <Route exact path='/chefs' component={allChefs} />
    <Route exact path='/chefs/:chef' component={chefProfile} />
    <Route exact path='/seasons/:id' component={seasonalrecipesPage} />
    <Route exact path='/chef/edit/:chef' component={Chef} />
    {/* <Route path="/sign-in" component={Login} />
    <Route path="/item-list" component={ItemsList} />
    <Route path="/sign-up" component={SignUp} /> */}
  </Switch>
  
  </Router>
  </div>

  );
}

export default App;
