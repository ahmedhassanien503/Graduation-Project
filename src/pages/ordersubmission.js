import React from 'react';
import { Redirect } from 'react-router-dom'


import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
 import SocialSection from '../components/SocialSection.js';

function ordersubmission(){
   
     
return (

    <div>
    <NavbarSection/>
    <HeaderSection/>
            <div className="container" style={{marginTop:"10px"}}>
               <h3>تم تسجيل الطلب بنجاح</h3>
            </div>
    <SocialSection />
</div>

         );
}


 
export default ordersubmission;