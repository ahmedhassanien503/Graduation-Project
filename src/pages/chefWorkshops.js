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

     handleSubmit =e=>{
        axios.post(`http://127.0.0.1:8000/api/workshops/delete/${e.target.value}`)
        .then(
        res=>{  window.location.reload(false);},
        );
        }

 
    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                <div className="container" >
                    <h3 style={{ textAlign: "center"  , color: "#d84315"}}> ورش الطبخ </h3><hr/>
                    <div className="row" >
                    <Table responsive>
                        <thead>
                            <tr>
                            <th style={{color: "#d84315"}} >رقم</th>
                            <th style={{color: "#d84315"}} >اسم الورشه</th>
                            <th style={{color: "#d84315"}} >صورة الورشه</th>
                            <th style={{color: "#d84315"}} colSpan="2" >التفاصيل</th>
                            <th style={{color: "#d84315"}} colSpan="2">تاريخ الورشه</th>
                            <th style={{color: "#d84315"}} colSpan="2">عدد المشتركين المحدد</th>
                            <th style={{color: "#d84315"}} colSpan="2">المتقدمين الى الورشه</th>
                            {/* <th style={{color: "#d84315"}} >حذف الورشه</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshops.map((workshop, i) => (   
                                    <tr>
                                    <td>{workshop.id}</td>
                                    <td>{workshop.workshop_name}</td>
                                    <td>
                                        <img src={`http://localhost:8000/uploads/workshops/${workshop.image}`} alt="" width="300" height="200"/>
                                    </td>
                                    <td colSpan="2">{ workshop.workshop_description}</td>
                                    <td colSpan="2"> { workshop.app_deadline} </td>
                                    <td colSpan="2"> {workshop.no_of_applicant}</td>
                                    <td colSpan="2"><Link to={`/workshopsApplicants/${workshop.id}`} style={{color: "#ff5722"}}>المتقدمين</Link></td>
                                    <td><button className="btn btn-outline-success btn-sm"  value={ workshop.id} onClick={this.handleSubmit} >   
                                             حذف </button></td>
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