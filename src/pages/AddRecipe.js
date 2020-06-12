import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class AddRecipe extends Component {
    constructor(){
        super();
        this.state={
            created_at:"",  
            RecipeName:"",
            details:"",
            recipe_image:"1591818376.jpg",
            Serving:"",
            TakenTime:"",
            user_id:"",     
          }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleSubmit = event =>{
          event.preventDefault();
         console.log("RecipeName: " + this.state.RecipeName);
          console.log("details: " + this.state.details);
          const url ="http://127.0.0.1:8000/api/recipes";
          const created_at=  this.state.created_at;
          const RecipeName=  this.state.RecipeName;
          const details= this.state.details;
          const recipe_image= this.state.recipe_image;
          const Serving= this.state.Serving;
          const TakenTime= this.state.TakenTime;
          const user_id= this.state.user_id;
          const formData = new FormData(); 
          formData.append('created_at',created_at); 
          formData.append('RecipeName',RecipeName); 
          formData.append('details',details); 
          formData.append('recipe_image',recipe_image); 
          formData.append('Serving',Serving); 
          formData.append('TakenTime',TakenTime); 
          formData.append('user_id',user_id);
       

            axios.post(url, formData)
            .then(
                res=>{  this.props.history.push(`/recipes/${res.data.data}`)},

            );
        }

render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container" style={{marginTop:"10px"}}>
                        <form onSubmit={this.handleSubmit}>
                            <h3>وصفات جديدة</h3>
                                <div className="form-group">
                                    <label>Created at</label>
                        <input name="created_at" type="text" className="form-control" onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Recipe Name</label>
                     <input name="RecipeName" type="text"  className="form-control"  placeholder="Recipe Name"onChange={this.handleChange} /></div>

                                <div className="form-group">
                                    <label>Details</label>
                     <textarea name="details"  className="form-control"  placeholder="DETAILS" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                    <input  name="recipe_image" type="file"  className="form-control" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Serving</label>
                  <input  name="Serving" type="number" className="form-control" placeholder="This Meal Will Serve" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Timing</label>
                  <input name="TakenTime" type="number"className="form-control" placeholder="This Meal will Take ?? To Be Ready"onChange={this.handleChange} />
                                </div>
                             
                                <div className="form-group">
                                    <label>User</label>
                 <input name="user_id" type="number" className="form-control" placeholder="Enter no_of_applicant" onChange={this.handleChange} />
                                        </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            <SocialSection />
        </div>
   
  );
}
}
export default AddRecipe;