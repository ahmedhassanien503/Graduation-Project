import React from "react";
// import "./css/tailwind.css";
// import Login from "./Login.js";
import Profile from "./Profile.js";
// import Register from "./Register.js";
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
import Chef from "./pages/editChefProfile.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";



import categoryrecipesPage from "./pages/categoryrecipesPage.js";
import AllCategories from './pages/AllCategories';
import createWorkshop from './pages/createWorkshop';
import editWorkshop from './pages/editWorkshop';
import workshopsApplicants from './pages/workshopsApplicants';
import chefWorkshops from './pages/chefWorkshops';
import askQuestion from './pages/askQuestion.js';
import allQuestions from "./pages/allQuestions.js";
import showQuestion from "./pages/showQuestion.js";
import editQuestion from "./pages/editQuestion.js";
import AddOrder from './pages/AddOrder';
import showorder from './pages/showorder';
import EditOrder from './pages/EditOrder';
import orderdeleted from './pages/orderdeleted';





function App() {
  return (
    <Router>
      <Switch>
    <Route exact path='/' component={homePage} />
    <Route exact path='/workshop/:workshop' component={workshopPage} />
    <Route exact path='/workshops' component={workshopsPage} />

    <Route exact path='/chefWorkshops' component={chefWorkshops} />
    <Route exact path='/createWorkshop' component={createWorkshop} />
    <Route exact path='/editWorkshop/:workshop' component={editWorkshop} />
    <Route exact path='/workshopsApplicants/:workshop' component={workshopsApplicants} />
    
    <Route exact path='/recipe/:recipe' component={chefrecipe} />
    <Route exact path='/recipes' component={chefrecipes} />
    <Route exact path='/userrecipes' component={userRecipes} />
    <Route exact path='/chefs' component={allChefs} />
    <Route exact path='/chefs/:chef' component={chefProfile} />
    <Route exact path='/seasons/:id' component={seasonalrecipesPage} />
    <Route exact path='/chef/edit/:chef' component={Chef} />
    <Route exact path='/categories/:id' component={categoryrecipesPage} />
    <Route exact path='/categories' component={AllCategories} />
    <Route exact path='/askquestion' component={askQuestion} />
    <Route exact path='/questions' component={allQuestions} />
    <Route exact path='/questions/:question' component={showQuestion} />
    <Route exact path='/editquestion/:question' component={editQuestion} />

    <Route exact path='/addorder' component={AddOrder} />
    <Route exact path='/orders/:order' component={showorder} />
    <Route exact path='/editorder/:order' component={EditOrder} />
    <Route exact path='/orderdeleted' component={orderdeleted} />




  
    
  

  <div className="bg-white-300 h-screen">
    <GuestRoute path="/layout" component={Layout} />
    <GuestRoute path="/login" component={Login} />
     <GuestRoute path="/register" component={Register} /> 
    <AuthRoute path="/profile" component={Profile} />
        </div>
        </Switch>
    </Router>
  );
}

export default App;
