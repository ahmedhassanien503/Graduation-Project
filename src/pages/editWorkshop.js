import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';
import Cookies from 'universal-cookie';

class editWorkshop extends Component {
    constructor(){
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state={
            workshop:{
            "workshop_name":"loading...",
            "workshop_description":"loading...",
            "app_deadline":"loading...",
            "no_of_applicant":"loading...",
            "chef_name":{"name":"loading..."},
            "image":""},
            name:"",  
            description:"",
            app_deadline:"",
            no_of_applicant:"",
            image:"",  
            user_id: User,
            }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleImage= event =>{
            this.setState({ [event.target.name]:event.target.files[0] })
          }
        componentDidMount()
        {
            axios.get(`http://127.0.0.1:8000/api/workshops/${this.props.match.params.workshop}`)
            .then(
                res=>{this.setState({ workshop: res.data.data})},
            )
        }
        handleSubmit = event =>{
          event.preventDefault();
          const url = `http://127.0.0.1:8000/api/workshops/update/${this.props.match.params.workshop}`;
          const name=  this.state.name ;
          const description=  this.state.description ;
          const app_deadline= this.state.app_deadline;
          const no_of_applicant= this.state.no_of_applicant;
          const image= this.state.image;
          const id=this.state.user_id.id;
          const formData = new FormData(); 
          formData.append('_method','PUT'); 
          formData.append('name',name); 
          formData.append('description',description); 
          formData.append('app_deadline',app_deadline); 
          formData.append('no_of_applicant',no_of_applicant ); 
          formData.append('image',image); 
          formData.append('id',id);       
        // console.log(formData.get('name'));
        // console.log(formData.get('image'));

        fetch(url, { method: 'POST', // or 'PUT’
        headers:{ 
            // 'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        body:formData, // data can be `string` or {object}!
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response =>
            {  
                // console.log('Success:', response); 
                this.props.history.push("/chefWorkshops")
        
            });

        // axios.post(url, formData)
        // .then(
        //     res=>{  
        //         this.props.history.push(`/workshops/${this.props.match.params.workshop}`)},
        // );
        }

render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
            {this.is_auth.is_chef ?
                    <div className="container" style={{marginTop:"10px"}}>
                        <form onSubmit={this.handleSubmit}>
                            <h3 style={{fontWeight:"bold" ,textAlign: "center" , color: "#455a64 "}}> {this.state.workshop.workshop_name} / تعديل ورشه عمل </h3><hr/>
                                <div className=" row"  style={{marginTop: "25px"}}>
                                    <div className=" col">
                                    <input 
                                        name="name"
                                        type="text" 
                                        style={{textAlign : "right"}}
                                        // value={this.state.workshop.workshop_name}
                                        className="form-control" 
                                        placeholder={this.state.workshop.workshop_name}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="col">
                                    <input 
                                        name="app_deadline"
                                        type="text" 
                                        style={{textAlign : "right"}}
                                        // value={this.state.workshop.app_deadline}
                                        className="form-control" 
                                        placeholder={this.state.workshop.app_deadline}
                                        onChange={this.handleChange} />
                                </div> </div>
                                <div className="row" style={{marginTop: "25px"}}>
                                    <textarea 
                                        rows="8"
                                        cols="35"
                                        style={{textAlign : "right"}}
                                        name="description"
                                        // value={this.state.workshop.workshop_description}
                                        className="form-control" 
                                        placeholder={this.state.workshop.workshop_description}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="row"  style={{marginTop: "25px"}}>
                                <div className="col">
                                    <input 
                                        name="no_of_applicant"
                                        style={{textAlign : "right"}}
                                        // value={this.state.workshop.no_of_applicant}
                                        type="number" 
                                        className="form-control" 
                                        placeholder={this.state.workshop.no_of_applicant}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="col">
                                    <input 
                                    name="image"
                                    type="file" 
                                    className="form-control" 
                                    onChange={this.handleImage} />
                                </div> </div>
                                <div className="text-center mt-4 mb-2">
                                <button type="submit" className="btn btn-info"> <i class="fas fa-user-edit"></i> تعديل</button>
                                </div> 
                        </form>
                    </div> : ""}
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
export default editWorkshop;