import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class EditRecipe extends Component {
    constructor(){
        super();
        this.state={
            recipe:{
            "created_at":"10-10-2020",
            "updated_at":"10-10-2020",
            "RecipeName":"pizaa",
            "details":"data",
            "recipe_image":"",
            "Serving":"5 Person",
            "TakenTime":"1 Hour"},
            created_at:"",  
            updated_at:"",
            RecipeName:"",
            details:"",
            recipe_image:"",
            Serving:"",
            TakenTime:"",    
            
        }
    }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        componentDidMount()
        {
            axios.get(`http://127.0.0.1:8000/api/recipes/${this.props.match.params.recipe}`)
            .then(
                res=>{this.setState({ recipe:res.data.data})},
            )
        }
        handleSubmit = event =>{
          event.preventDefault();
          const url = `http://127.0.0.1:8000/api/recipes/${this.props.match.params.workshop}`;
          const updated_at= this.state.updated_at;
          const created_at= this.state.created_at;
          const RecipeName= this.state.RecipeName;
          const details= this.state.details;
          const recipe_image= this.state.recipe_image;
          const Serving= this.state.Serving;
          const TakenTime= this.state.TakenTime;
          const formData = new FormData(); 
          formData.append('_method','PUT'); 
          formData.append('updated_at',updated_at); 
          formData.append('created_at',created_at); 
          formData.append('RecipeName',RecipeName); 
          formData.append('details',details); 
          formData.append('recipe_image',recipe_image); 
          formData.append('Serving',Serving); 
          formData.append('TakenTime',TakenTime); 
   
          console.log(formData.get('RecipeName'));
          console.log(formData.get('recipe_image'));

            fetch(url, { method: 'POST',
            headers:{ 'Accept': 'application/json' },
            body:formData,})
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>
                {  console.log('Success:', response); 
                   this.props.history.push(`/recipes/${this.props.match.params.recipe}`)
            
                });

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
                        <input name="created_at" type="text" className="form-control"  onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Updated at</label>
                        <input name="updated_at" type="text" className="form-control"  onChange={this.handleChange} />
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
                             
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            <SocialSection />
        </div>
   
  );
}
}
export default EditRecipe;