import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class createWorkshop extends Component {
    constructor(){
        super();
        this.state={
            name:"",  
            description:"",
            app_deadline:"",
            no_of_applicant:"",
            image:"",
        }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
      
        handleSubmit = event =>{
            
          event.preventDefault();
          console.log("name : " + this.state.name);
          console.log("description: " + this.state.description);
          const url ="http://127.0.0.1:8000/api/workshops/store";
          const name=  this.state.name ;
          const description=  this.state.description ;
          const app_deadline= this.state.app_deadline;
          const no_of_applicant= this.state.no_of_applicant;
          const image= this.state.image;
          const formData = new FormData(); 
          formData.append('name',name); 
          formData.append('description',description); 
          formData.append('app_deadline',app_deadline); 
          formData.append('no_of_applicant',no_of_applicant ); 
          formData.append('image',image); 
        //   formData.append('_method','PUT'); 
        
        // Attach file formData.append('image', $('input[type=file]')[0].files[0]); 
        //   const data = { 
        //         name:this.state.name, 
        //         description:this.state.description, 
        //         app_deadline:this.state.app_deadline, 
        //         no_of_applicant:this.state.no_of_applicant, 
        //         image:this.state.image, 
        //     }

            console.log(formData.get('name'));
            console.log(formData.get('image'));
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
                {  console.log('Success:', response);  });

            // axios.post('http://127.0.0.1:8000/api/workshops/store',
            // {  
            //     name:this.state.name, 
            //     description:this.state.description, 
            //     app_deadline:this.state.app_deadline, 
            //     no_of_applicant:this.state.no_of_applicant, 
            //     image:this.state.image, 
            // }
            // )
            // .then(function (response) {
            //     console.log(response);
            //   })
        }

render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container" style={{marginTop:"10px"}}>
                        <form onSubmit={this.handleSubmit}>
                            <h3>Sign In</h3>
                                <div className="form-group">
                                    <label>WorkshopName</label>
                                    <input 
                                        name="name"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter workshop name"
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea 
                                        name="description"
                                        className="form-control" 
                                        placeholder="Enter description"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Workshop Day</label>
                                    <input 
                                        name="app_deadline"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Workshop Day example: 1-1-2001"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>No_Of_Applicant</label>
                                    <input 
                                        name="no_of_applicant"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter no_of_applicant"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input 
                                    name="image"
                                    type="file" 
                                    className="form-control" 
                                    onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            <SocialSection />
        </div>
   
  );
}
}
export default createWorkshop;