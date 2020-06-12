import React from 'react';
import '../App.css';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import RecipeSection from '../components/RecipeSection.js';
import RecipeSliderSection from '../components/RecipeSliderSection.js';
import SeasonSection from '../components/SeasonSection.js';
import MainSection from '../components/MainSection.js';
import SocialSection from '../components/SocialSection.js';
import NavbarSection from '../components/NavbarSection.js';
import SidebarSection from '../components/SidebarSection.js';
import HeadlineSection from '../components/HeadlinesSection.js';
import SinglepageSection from '../components/SinglepageSection.js';
import ChefSection from '../components/ChefSection.js';
import NavHeaderSection from '../components/NavHeaderSection.js';
import NavSection from '../components/NavSection.js';
import AllrecipesSection from '../components/AllrecipesSection.js';




function homePage() {
  
  return (
    <div className="App">
      <NavSection/>
      {/* <NavHeaderSection/> */}
      <br/>
      <MainSection /> 
      {/* <NavbarSection/>
      <HeaderSection /> */}
      <br></br>
      <RecipeSliderSection />
      {/* <SidebarSection /> */} 


      <SeasonSection /> 
      <RecipeSection />
     
      <ChefSection />
      <FooterSection />
      <SocialSection />   

     {/* < HeadlineSection />

     {/* <SinglepageSection /> */}
  

      {/* <Form /> */}
    
   {/* <AllrecipesSection /> */}
    </div>
  );
}

export default homePage;
