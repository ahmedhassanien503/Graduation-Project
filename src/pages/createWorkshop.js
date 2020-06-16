import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';
import Cookies from 'universal-cookie';

class createWorkshop extends Component {
    constructor(){
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        // console.log(User);
        this.state={
            name:"",  
            description:"",
            app_deadline:"",
            no_of_applicant:"",
            image:"", 
            user_id: User.id,
          }
        //   console.log(this.state);
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleImage = event =>{
            this.setState({ [event.target.name]:event.target.files[0] })
          }
        handleSubmit = event =>{
          event.preventDefault();
        //   console.log("name : " + this.state.name);
        //   console.log("description: " + this.state.description);
          const url ="http://127.0.0.1:8000/api/workshops/store";
          const name=  this.state.name ;
          const description=  this.state.description ;
          const app_deadline= this.state.app_deadline;
          const no_of_applicant= this.state.no_of_applicant;
          const image= this.state.image;
          const id=this.state.user_id;
          const formData = new FormData(); 
          formData.append('name',name); 
          formData.append('description',description); 
          formData.append('app_deadline',app_deadline); 
          formData.append('no_of_applicant',no_of_applicant ); 
          formData.append('image',image); 
          formData.append('id',id); 
        //   formData.append('_method','PUT');         
        //   const data = { 
        //         name:this.state.name, 
        //         description:this.state.description, 
        //         app_deadline:this.state.app_deadline, 
        //         no_of_applicant:this.state.no_of_applicant, 
        //         image:this.state.image, 
        //     }
            // console.log(formData.get('name'));
            // console.log(formData.get('image'));
            // fetch(url, { method: 'POST', // or 'PUT’
            // headers:{ 
            //     // 'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            //   },
            // body:formData, // data can be `string` or {object}!
            // })
            // .then(res => res.json())
            // .catch(error => console.error('Error:', error))
            // .then(response =>
            //     {  console.log('Success:', response);  });
            axios.post(url, formData)
            .then(
                res=>{  this.props.history.push(`/workshops/${res.data.data.id}`)},
            );
        }

render(){
    return(
        <div>
            <NavbarSection/>
            <HeaderSection/>
            {this.is_auth.is_chef ?
                    <div className="container styles.center" style={{marginTop:"10px"}}>
                        <form onSubmit={this.handleSubmit}>
                            <h3 style={{fontWeight:"bold" ,textAlign: "center" , color: "#455a64 "}}>انشاء ورشه عمل جديدة</h3><hr/>
                                <div className=" row"  style={{marginTop: "25px"}}>
                                    <div className=" col">
                                    <input 
                                        name="name"
                                        type="text" 
                                        style={{textAlign : "right"}}
                                        className="form-control  align-right"
                                        placeholder="اسم الورشه"
                                        border= "2px solid red"
                                        bordeRadius= "4px"
                                        onChange={this.handleChange} required />
                                </div> 
                                <div className="col">
                                    <input 
                                        style={{textAlign : "right"}}
                                        name="app_deadline"
                                        type="text" 
                                        className="form-control" 
                                        placeholder=" 01-01-2001 تاريخ الورشه"
                                        onChange={this.handleChange} required/>
                                </div>
                                </div>
                                <div className="row" style={{marginTop: "25px"}}>
                                    <textarea 
                                        rows="8"
                                        cols="35"
                                        name="description"
                                        style={{textAlign : "right"}}
                                        className="form-control" 
                                        placeholder="تفاصيل الورشه"
                                        onChange={this.handleChange} required/>
                                </div>

                                <div className="row"  style={{marginTop: "25px"}}>
                                <div className="col">
                                    <input 
                                        name="no_of_applicant"
                                        type="number" 
                                        style={{textAlign : "right"}}
                                        className="form-control" 
                                        placeholder="عدد المشتركين المحدد للورشه"
                                        onChange={this.handleChange} required/>
                                </div>
                                <div className="col">
                                    <input 
                                    name="image"
                                    type="file" 
                                    className="form-control" 
                                    onChange={this.handleImage} />
                                </div>  </div>
                                <div className="text-center mt-4 mb-2">
                                <button type="submit" className="btn btn-info"> <i class="fas fa-user-edit"></i> انشاء</button>
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
export default createWorkshop;