import React from "react";
import "./css/tailwind.css";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Register from "./Register.js";
import GuestRoute from "./components/GuestRoute.js";
import AuthRoute from "./components/AuthRoute.js";
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
import Layout from "./components/Layout";



import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import homePage from "./pages/homePage.js";
import workshopsPage from "./pages/workshopsPage.js";
import workshopPage from "./pages/workshopPage.js";
import chefrecipe from "./pages/chefrecipe.js";
import chefrecipes from "./pages/chefrecipes.js";
import userRecipes from "./pages/userRecipes.js";
import allChefs from "./pages/allChefs.js";
import chefProfile from "./pages/chefProfile.js";
import seasonalrecipesPage from "./pages/seasonalrecipesPage.js";


function App() {
  return (
    <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path='/' component={homePage} />
          <Route exact path='/workshops/:workshop' component={workshopPage} />
          <Route exact path='/workshops' component={workshopsPage} />
          {/* <Route path="/sign-in" component={Login} />
          <Route path="/item-list" component={ItemsList} />
          <Route path="/sign-up" component={SignUp} /> */}
        </Switch>
        
=======
        <div className="bg-gray-300 h-screen">
    <Route exact path='/' component={homePage} />
    <Route exact path='/workshop/:workshop' component={workshopPage} />
    <Route exact path='/workshops' component={workshopsPage} />

    <Route exact path='/recipe/:recipe' component={chefrecipe} />
    <Route exact path='/recipes' component={chefrecipes} />
    <Route exact path='/userrecipes' component={userRecipes} />
    <Route exact path='/chefs' component={allChefs} />
    <Route exact path='/chefs/:chef' component={chefProfile} />
    <Route exact path='/seasons/:id' component={seasonalrecipesPage} />
    <GuestRoute path="/layout" component={Layout} />
    <GuestRoute path="/login" component={Login} />
    <GuestRoute path="/register" component={Register} />
    <AuthRoute path="/profile" component={Profile} />
        </div>
>>>>>>> 53611314ecac6c9170e86780787fb66b67cd3d96
    </Router>
  );
}

export default App;
