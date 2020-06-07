import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import SocialSection from '../components/SocialSection.js';
import FooterSection from '../components/FooterSection.js';
class seasonalrecipesPage extends Component {

    constructor()
    {
        super();
        this.state={
            recipes:[]
        }
    }
    
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/seasons/${this.props.match.params.id}`)
       .then(
           res=>{this.setState({ recipes: res.data.data})},
           );

    }
 
    render(){
    return(
  
        <div className="AllrecipesSection">
            <NavbarSection/>
            <HeaderSection/>
        
              <section className="archive-area section_padding_80">
        <div className="container">
            <div className="row">

            {this.state.recipes.map(recipe=>{
            return(
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                        <div className="post-thumb">
                            <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_info.image}`} alt="" width="340" height="240"/>
                        </div>
                        <div className="post-content">
                            <div className="post-meta d-flex">
                                <div className="post-author-date-area d-flex">
                                    
                                    <div className="post-author">
                                        <a href="#">{recipe.recipe_info.RecipeName}</a>
                                    </div>
                             
                                    <div className="post-date">
                                        <a href="#">{recipe.recipe_info.created_at}</a>
                                    </div>
                                </div>
                                {/* <div className="post-comment-share-area d-flex">
                                    <div className="post-favourite">
                                        <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                                    </div>

                              
                                    <div className="post-comments">
                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                    </div>
                              
                                    <div className="post-share">
                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                    </div>
                                </div> */}
                            </div>
                            <a href="#">
                            <h4 className="post-headline">{recipe.recipe_info.details}</h4>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            )}

                <div className="col-12">
                    <div className="pagination-area d-sm-flex mt-15">
                        <nav aria-label="#">
                            <ul className="pagination">
                                <li className="page-item active">
                                    <a className="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </nav>
                        <div className="page-status">
                            <p>Page 1 of 10 results</p>
                        </div>
                    </div>
                </div>

         
    


</div>
</div>

                </section>
                <FooterSection/>
<SocialSection />

</div>     
   
  );
}
}
export default seasonalrecipesPage;