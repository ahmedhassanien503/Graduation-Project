import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "./contact.css";


import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import RecipeSliderSection from '../components/RecipeSliderSection.js';


class ContactUsPage extends Component {
    constructor(){
        super();
        this.state={ 
            name:"",
            email:"",
            message:"",
        
          }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleSubmit = event =>{
          event.preventDefault();
          const url ="http://127.0.0.1:8000/api/contacts";
          const name=  this.state.name;
          const email= this.state.email;
          const message= this.state.message;
          const formData = new FormData(); 
          formData.append('name',name); 
          formData.append('email',email); 
          formData.append('message',message); 
       

            axios.post(url, formData)
            .then(
                res=>{  this.props.history.push(`/contacts/${res.data.data}`)},

            );
        }
    render(){
    return(
  
        <div className="ContactUsPage">
            <NavbarSection/>
            <HeaderSection/>

      
            <div className="breadcumb-area ">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="bradcumb-title text-center">
                        <h2>تواصل معنا</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="breadcumb-nav">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
 <br></br>
 <div className="container">
    <div className="contact-form-area">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="contact-form-sidebar " data-wow-delay="0.3s" >
                        <p> . </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 item" style={{textAlign:"right"}}>
                        <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s">
                            <h5 className="contact-form-title mb-30" style={{color:"#FF8C00"}}>      اذا كان لديك اى سؤال ؟يمكنك ارساله بسهوله</h5>
                            
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text"name="name" className="form-control" id="contact-name" placeholder="الأسم" style={{textAlign:"right"}} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="email"name="email" className="form-control" id="contact-email" placeholder="الايميل" style={{textAlign:"right"}} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="الرسالة" style={{textAlign:"right"}} onChange={this.handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn contact-btn">ارسل الأن</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br></br><br></br>
 <RecipeSliderSection />


          
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
export default ContactUsPage;