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

function App() {
  
  return (
    <div className="App">
 

      <NavHeaderSection/>
      <br/>
      <MainSection /> 
    
      <RecipeSliderSection />
    
      <SeasonSection /> 
      <RecipeSection />
     
      <ChefSection />
      <FooterSection />
      <SocialSection />   





  {/* <NavbarSection/>
      <HeaderSection />
  <SidebarSection />  
     < HeadlineSection />

     <SinglepageSection />
  

       <Form />
    
   <AllrecipesSection /> */}

    </div>
  );
}

export default App;
