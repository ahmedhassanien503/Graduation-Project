import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import Cookies from 'universal-cookie';

class userChefWorkshop extends Component {
    constructor()
    {
        super();
        const cookies = new Cookies();
        const is_auth = cookies.get('UserData');
        this.state={
            workshops:[] ,
        }
    } 
  
    componentDidMount()
    {
        axios.get(`http://127.0.0.1:8000/api/ChefWorkshops/${this.props.match.params.chefId}`)
        .then(res=>{
            console.log(res.data.data)
            this.setState({ workshops: res.data.data})
        });
    }

    render(){
    return(
        <div>
            <NavbarSection/>
            <HeaderSection/>
            <div className="container" >
                    <h3 style={{ textAlign: "center"}}> ورش الطبخ </h3><hr/>
                    <div className="row" >
                        {this.state.workshops.map((workshop, i) => (   
                            <div className="col-4">
                            <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
                                <div className="card-header"><Link to={`/workshops/${workshop.id}`}> 
                                        <img src={`http://localhost:8000/uploads/workshops/${workshop.image}`} alt="" width="340" height="240"/>
                                        </Link></div>
                                <div className="card-body text-info">
                                    <h5 className="card-title" style={{textAlign: "right"}}>{workshop.workshop_name}</h5>
                                    <h6 style={{textAlign: "right"}}> {workshop.app_deadline}: معاد الورشه </h6>
                                    <h6 style={{textAlign: "right"}}> :جدول الورشه </h6>
                                    <p className="card-text" style={{textAlign: "right"}}>{workshop.workshop_description}</p>
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
}}
export default userChefWorkshop;