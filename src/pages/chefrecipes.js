import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class chefrecipes extends Component {

    constructor()
    {
        super();
        this.state={
        recipes:[]
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/recipes')
       .then(result=>{this.setState({recipes:result.data.data})});
    
    }
 
    render(){
    return(
  
        <div className="chefrecipes">
            <NavbarSection/>
            <HeaderSection/>

            <section className="archive-area section_padding_80">
        <div className="container">
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
</div>
</div>

    
    </section>
       
          
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
export default chefrecipes;