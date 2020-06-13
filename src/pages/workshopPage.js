import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class workshopPage extends Component {
    constructor()
    {
        super();
        this.state={
            workshop:{
                "workshop_name":"loading...",
                "workshop_description":"loading...",
                "app_deadline":"loading...",
                "no_of_applicant":"loading...",
                "chef_name":{"name":"loading..."},
                "image":""},
        }
    }
    
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/workshops/${this.props.match.params.workshop}`)
       .then(
           res=>{  this.setState({ workshop: res.data.data})},
           );
    }
   

    handleSubmit = event =>{
        const  data= {
            'user_id':"1",
            'workshop_id' :  `${this.props.match.params.workshop}`,
        }
        axios.post(`http://127.0.0.1:8000/api/applicants` ,data)
        .then(
        res=>{console.log(res)},
        );
        }

    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container styles.center" style={{marginTop:"10px"}}>
                        <h3 style={{fontWeight:"bold" ,textAlign: "center"}}> { this.state.workshop.workshop_name} : ورشه عمل</h3>
                            <div  style={{ textAlign: "center"}}>
                                <img src={`http://localhost:8000/uploads/workshops/${this.state.workshop.image}`} alt="" width="7000" height="450" />
                          
                                <div style={{backgroundColor :"#f0f4c3" , marginTop:"15px"}}>
                                <p >{ this.state.workshop.workshop_description} :جدول الورشه </p><hr/>
                                <p> { this.state.workshop.app_deadline} :تاريخ البدء</p><hr/>
                                <p >{ this.state.workshop.chef_name.name}: الشيف</p><hr/>
                                <span style={{color: "orange"}}> {this.state.workshop.no_of_applicant} :عدد المشتركين</span><hr></hr>
                                <div> <img src="/img/food10.jpg" alt=""  width="150" height="100"/><button className="btn btn-outline-success btn-sm" onClick={this.handleSubmit} >   
                                <i class="fas fa-user-check"></i>  اكتسب مهارة الطبخ واحجز اﻻن </button>  </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{marginTop: "25px"}}>
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
export default workshopPage;