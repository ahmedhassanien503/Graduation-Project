import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class workshopsPage extends Component {

    constructor()
    {
        super();
        this.state={
            workshops:[]
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/workshops')
       .then(
           res=>{this.setState({ workshops: res.data.data})},
           );

    }
 
    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                <div className="container" >
                    <h3 style={{ textAlign: "center"}}> ورش الطبخ المتاحه</h3><hr/>
                    <div className="row" >
                        {this.state.workshops.map((workshop, i) => (   
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="post-thumb"><Link to={`/workshops/${workshop.id}`}> 
                                            <img src={`http://localhost:8000/uploads/workshops/${workshop.image}`} alt="" width="340" height="240"/>
                                        </Link></div>
                                        <div className="post-content"  style={{ textAlign: "right"}}>
                                                <h6>:بيانات الورشه</h6>
                                                <span>{workshop.workshop_name} / </span>
                                                <span>{workshop.app_deadline}</span>
                                                <p className="post-headline" >{workshop.chef_name.name}: الشيف</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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
export default workshopsPage;