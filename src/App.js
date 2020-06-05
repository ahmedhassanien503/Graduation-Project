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

function App() {
  return (
    <div className="App">
       <NavbarSection/>
      <HeaderSection />
   
       <RecipeSliderSection />
       {/* <SidebarSection /> */}
      
      <SeasonSection />
     

      <MainSection />
    
      <RecipeSection />
   
      <FooterSection />
      <SocialSection />    */}

     {/* < HeadlineSection />

     {/* <SinglepageSection /> */}
    
   {/* <AllrecipesSection /> */}
    </div>
  );
}

export default App;
