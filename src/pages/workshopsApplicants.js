import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class workshopsApplicants extends Component {

    constructor()
    {
        super();
        this.state={
            workshopApplicants:[],
            applicant:{
                "id":"loading...",
                "is_accepted":"loading...", },
        }
    }
    
    componentDidMount()
    {
        axios.get(`http://127.0.0.1:8000/api/workshopApplicants/${this.props.match.params.workshop}`)
        .then(
            res=>{this.setState({ workshopApplicants: res.data.data})},
            );
    }
    handleSubmit = e =>{
        // event.preventDefault();

        // this.setState({applicant: `${click.Value}`})
        // console.log("name : " + this.state.name);
        // console.log("description: " + this.state.description);
    
        console.log(e.target.value);
        axios.get(`http://127.0.0.1:8000/api/applicants/${e.target.value}`)
        .then(
            res=>{this.setState({ applicant: res.data.data})},
            // 
        )
        .then(this.sendRequest);
    }
    sendRequest = e =>{
        let url="";
        console.log(this.state.applicant.is_accepted);
        if(this.state.applicant.is_accepted){
            url =`/applicants/${this.state.applicant.id}/reject`;
            console.log(url);
        }else{
            url =`/applicants/${this.state.applicant.id}/accept`;
            console.log(url);}
        // fetch(url, { method: 'PUT’', // or 'PUT’
        // headers:{ 
        //     // 'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //     },
        // //   body:formData, // data can be `string` or {object}!
        // })
        // .then(res => res.json())
        // .catch(error => console.error('Error:', error))
        // .then(response =>
        //     {  console.log('Success:', response); 
        //     // this.props.history.push(`/workshopApplicants/${this.props.match.params.workshop}`)
        // });
    }
    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                <div className="container" >
                    <h3 style={{ textAlign: "center"}}>   المتقدمين الى ورشه الطبخ</h3><hr/>
                    <div className="row" >
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>رقم</th>
                            <th>اسم المتقدم</th>
                            <th>صورة المتقدم</th>
                            <th>تأكيد/الغاء</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshopApplicants.map((workshopApplicant, i) => (   
                                    <tr>
                                    <td>{i}</td>
                                    <td>{workshopApplicant.user_name.name}</td>
                                    <td>
                                        <img src={`http://localhost:8000/uploads/workshops/${workshopApplicant.user_name.image}`} alt="" width="340" height="240"/>
                                    </td>
                                    <td>
                             
                                    { workshopApplicant.is_accepted ?     
                                        <button className="btn btn-outline-success btn-sm" onClick={this.handleSubmit} value={workshopApplicant.user_name.id}> <i class="far fa-check-square"></i> Accept</button>   
                                        : 
                                        <button className="btn btn-outline-warning btn-sm" value={workshopApplicant.user_name.id} onClick={this.handleSubmit} >   
                                            <i class="fas fa-user-slash" ></i>Reject </button>                                   
                                        }
                                    </td>
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
export default workshopsApplicants;