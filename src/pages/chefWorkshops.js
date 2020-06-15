import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';
import Cookies from 'universal-cookie';

class chefWorkshops extends Component {
    constructor()
    {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state={
            workshops:[] ,
            user: User,
        }
    }   
    componentDidMount()
    {
        if(this.is_auth){
        axios.get(`http://127.0.0.1:8000/api/ChefWorkshops/${this.is_auth.id}`)
        .then(
            res=>{            
                // console.log(res.data.data)
                this.setState({ workshops: res.data.data})},
            );
         }
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
                    <h3 style={{ textAlign: "center"  , color: "#d84315"}}> ورش الطبخ </h3><hr/>
                    {this.is_auth.is_chef ?
                    <Table responsive>
                        <thead>
                            <tr >
                            <th style={{color: "#d84315" , textAlign : "right"}} >رقم</th>
                            <th style={{color: "#d84315" , textAlign : "right"}}  colSpan="2">اسم الورشه</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} >صورة الورشه</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="3" >التفاصيل</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="4">تاريخ الورشه</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="3">عدد المشتركين المحدد</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="2">المتقدمين الى الورشه</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} >تعديل الورشه</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} >حذف الورشه</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshops.map((workshop, i) => (   
                                    <tr>
                                    <td style={{textAlign : "right"}}>{i+1}</td>
                                    <td  style={{textAlign : "right"}} colSpan="2">{workshop.workshop_name}</td>
                                    <td style={{textAlign : "right"}}>
                                        <img src={`http://localhost:8000/uploads/workshops/${workshop.image}`} alt="" width="150" height="90"/>
                                    </td>
                                    <td  style={{textAlign : "right"}} colSpan="3">{ workshop.workshop_description}</td>
                                    <td style={{textAlign : "right"}} colSpan="4"> { workshop.app_deadline} </td>
                                    <td style={{textAlign : "right"}} colSpan="3" > {workshop.no_of_applicant}</td>
                                    <td style={{textAlign : "right"}} colSpan="2"><Link to={`/workshopsApplicants/${workshop.id}`} style={{color: "#ff5722"}}>المتقدمين</Link></td>
                                    <td style={{textAlign : "right"}}><Link to={`/editWorkshop/${workshop.id}`} style={{color: "#ff5722"}}>تعديل</Link></td>
                                    <td style={{textAlign : "right"}}><button className="btn btn-outline-success btn-sm"  value={ workshop.id} onClick={this.handleSubmit} >   
                                             حذف </button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table> : ""}
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