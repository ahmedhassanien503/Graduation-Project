import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import NavSection from '../components/NavSection.js';
import jQuery from 'jquery';
import Cookies from 'universal-cookie';
import SocialSection from '../components/SocialSection.js';
import "./contact.css";

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class userProfile extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state = {
            user : []
         };
      }
    
    componentDidMount(){
    //  axios.get(`http://127.0.0.1:8000/api/users/${this.props.match.params.user}`)
    //  .then(res=>{
    //          console.log(res.data.data)
    //          this.setState({
    //             user: res.data.data
    //          });
    //      })
        if(this.is_auth){
         console.log(this.is_auth.id);
         axios.get(`http://127.0.0.1:8000/api/chefs/${this.is_auth.id}`)
         .then(res=>{
                 console.log(res.data.users)
                 console.log(res.data.recipes)
 
                 this.setState({
                     user: res.data.users,
                     recipes:res.data.recipes
                 }) })
    }}

    render(){
        
   return(
       <div>
           {/* <NavbarSection/> */}
            <NavSection/>

                <div className="user-profile">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-right">
                                <img src={`http://127.0.0.1:8000/uploads/user/${this.state.user.image}`} className="mr-3 img-fluid" id="chef-img" alt="" />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container">
                { this.state.recipes ?
                    <div className="row">
                {this.state.recipes.map(recipe=>{
                return(
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                            <div className="post-thumb"><Link to={`/recipe/${recipe.id}`}> 
                            <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" />
                                </Link>
                            </div>
                            <div className="post-content">
                                <div className="post-meta d-flex">
                                    <div className="post-author-date-area d-flex">
                                        
                                        <div className="post-author">
                                            <a href="#">by {recipe.user.name}</a>
                                        </div>
                                
                                        <div className="post-date">
                                        <a href="#">at {recipe.created_at}</a>
                                        </div>
                                    </div>
                                    <div className="post-comment-share-area d-flex">
        
                                        <div className="post-share">
                                            <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    {/* <h3 className="post-headline">{recipe.RecipeName}</h3> */}
                                    <h3 className="post-headline">{recipe.title}</h3>

                                </a>
                            </div>
                        </div>
                    </div>

                    ) } )} 
                    </div> : ""}
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
export default userProfile;