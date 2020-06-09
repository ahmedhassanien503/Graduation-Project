import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import axios from 'axios';
import Pagination from "react-js-pagination";
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import SocialSection from '../components/SocialSection.js';
import FooterSection from '../components/FooterSection.js';
class categoryrecipesPage extends Component {

    constructor()
    {
        super();
        this.state={
            recipes:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:4,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }
         
       
    
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/categories/${this.props.match.params.id}`)
       .then(
        res=>{
            this.setState({
                recipes:res.data.data,
        //    ( console.log(res.data.data));
                itemsCountPerPage:res.data.meta.per_page,
                totalItemsCount:res.data.meta.total,
                activePage:res.data.meta.current_page,
                        
            }
            )
        });
    }



    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get(`http://127.0.0.1:8000/api/categories/${this.props.match.params.id}?page=${pageNumber}`)
        .then(res=>{
            this.setState({
                recipes:res.data.data,
                itemsCountPerPage:res.data.meta.per_page,
                totalItemsCount:res.data.meta.total,
                activePage:res.data.meta.current_page,
                

            });});
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
                <div className="col-12 col-md-6 col-lg-4" key={recipe.id}>
                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                        <div className="post-thumb">
                            <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_info.recipe_image}`} alt="" width="340" height="240"/>
                        </div>
                        <div className="post-content">
                            <div className="post-meta d-flex">
                                <div className="post-author-date-area d-flex">
                                    
                                    <div className="post-author">
                                        <a href="#">{recipe.recipe_info.RecipeName}</a>
                                    </div>
                             
                                    <div className="post-date">
                                        <a href="#">{recipe.recipe_info.user.name}</a>
                                    </div>
                                    
                                </div>

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
                    <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                    />
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
export default categoryrecipesPage;