import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class userRecipe extends Component {
    constructor()
    {
        super();
        this.state={
            recip:[]
        }
    }
    
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/userrecipes/${this.props.match.params.recip}`)
       .then(
           res=>{  this.setState({recip: res.data.data})},
           );
    }

    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                <div className="container styles.center" style={{marginTop:"10px"}}>
               
                            <p >{this.state.recip.RecipeName}</p><hr/>
                            <img src={`http://localhost:8000/uploads/recipes/${this.state.recip.recipe_image}`} alt="" width="450" height="400"/>

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
export default userRecipe;