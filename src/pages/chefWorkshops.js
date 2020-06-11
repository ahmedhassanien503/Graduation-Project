import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class chefWorkshops extends Component {

    constructor()
    {
        {
            super();
            this.state={
                workshops:[] 
            }
           
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/ChefWorkshops')
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
                    <h3 style={{ textAlign: "center"}}> ورش الطبخ </h3><hr/>
                    <div className="row" >
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>رقم</th>
                            <th>اسم الورشه</th>
                            <th>صورة الورشه</th>
                            <th>التفاصيل</th>
                            <th>التاريخ المحدد للورشه</th>
                            <th>عدد المشتركين المحدد</th>
                            <th>المتقدمين للاشتراك فى الورشه</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshops.map((workshop, i) => (   
                                    <tr>
                                    <td>{workshop.id}</td>
                                    <td>{workshop.workshop_name}</td>
                                    <td>
                                        <img src={`http://localhost:8000/uploads/workshops/${workshop.image}`} alt="" width="340" height="240"/>
                                    </td>
                                    <td>{ workshop.workshop_description}</td>
                                    <td> { workshop.app_deadline} </td>
                                    <td> {workshop.no_of_applicant}</td>
                                    <td><Link to={`/workshopsApplicants/${workshop.id}`}>المتقدمين</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
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
export default chefWorkshops;