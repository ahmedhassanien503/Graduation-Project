import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import "./contact.css";

import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import RecipeSliderSection from '../components/RecipeSliderSection.js';


class AboutUsPage extends Component {
  
    render(){
    return(
  
        <div className="ContactUsPage">
            <NavbarSection/>
            <HeaderSection/>

      
            <div className="area ">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="bradcumb-title text-center">
                        <h2>من نحن </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="card-group">
  <div className="card">
    <img src="/img/team/Marwa.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Marwa Ayman</h5>
      <p className="card-text">Graduated from faculty of engineering alexandria university class 2018,,<br></br>full stack developer</p>
      <p className="card-text"><small class="text-muted">ITI Student "Open Source Trake"</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/img/team/Mayar1.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Mayar Alaa</h5>
      <p className="card-text">Graduated from faculty of engineering alexandria university class 2019,,<br></br>full stack developer</p>
      <p className="card-text"><small class="text-muted">ITI Student "Open Source Trake"</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/img/team/Ahmed.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ahmed Mahmoud</h5>
      <p className="card-text">Graduated from faculty of commerce alexandria university class 2017,,<br></br>full stack developer</p>
      <p className="card-text"><small class="text-muted">ITI Student "Open Source Trake"</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/img/team/Manar.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Manar Elsayed</h5>
      <p className="card-text">Graduated from faculty of engineering alexandria university class 2017,,<br></br>full stack developer.</p>
      <p className="card-text"><small class="text-muted">ITI Student "Open Source Trake"</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/img/team/Yasmine.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Yasmine Khaled</h5>
      <p className="card-text">Graduated from faculty of engineering alexandria university class 2019,,<br></br>full stack developer.</p>
      <p className="card-text"><small class="text-muted">ITI Student "Open Source Trake"</small></p>
    </div>
  </div>
  
</div>


<div className="card text-center">
  <div className="card-header">
    RATUTOILE
  </div>
  <div className="card-body">
    <h5 className="card-title">مرحبا بك فى بوابتك لاحتراف الطهى</h5>
    <p className="card-text">يمكنك الانضمام لنا الان وبكل سهولة</p>
    <Link to={"/contactus"} className="btn btn-success btn-lg btn-block">للتواصل معنا</Link>
    
    {/* <Link to={"/questions"} style={{color:"grey"}}> الاسئلة و الاستفسارات </Link> */}

  </div>
  <div className="card-footer text-muted">
    SEE YOU AGAIN
  </div>
</div>

          
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copy_right_text text-center">
                                <p>@2020, Made with <i className="fas fa-heart"></i> by <a href="#" > Ratatouille Team </a> for food lover's.</p>
                            </div>
                        </div>
                    </div>
                </div>
            <SocialSection />
      </div>
   
  );
}
}
export default AboutUsPage;