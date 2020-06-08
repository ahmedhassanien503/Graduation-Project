import React , {Component} from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";


class MainSection extends Component {
    constructor()
    {
        super();
        this.state={
        recipes:[],
        activePage:1,
        itemsCountPerPage:1,
        totalItemsCount:1,
        pageRangeDisplayed:2,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/recipes')
       .then(result=>{this.setState({
           recipes:result.data.data,
           itemsCountPerPage:result.data.per_page,
           totalItemsCount:result.data.total,
           activePage:result.data.current_page,
           
        
        })});

    }

  
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get(`http://127.0.0.1:8000/api/recipes/${this.props.match.params.id}?page=${pageNumber}`)
        .then(result=>{
            this.setState({
                recipes:result.data.data,
                itemsCountPerPage:result.data.per_page,
                totalItemsCount:result.data.total,
                activePage:result.data.current_page,
                

            });});
      }

  render(){
    return (
        <div className="MainSection container">
<div>
<h2>افضل الوصفات</h2>
<hr/>
</div>
{this.state.recipes.map(recipe=>{
            return(
       

            <div className="col-12">
                <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                
                    <div className="post-thumb">
                    <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" />

                    </div>
                 
                    <div className="post-content">
                        <div className="post-meta d-flex">
                            <div className="post-author-date-area d-flex">
                             
                                <div className="post-author">
                                    <a href="#">By {recipe.name}</a>
                                </div>
                           
                                <div className="post-date">
                                    <a href="#"> {recipe.created_at}</a>
                                </div>
                            </div>
                       
                            <div className="post-comment-share-area d-flex">
                        
                            </div>
                        </div>
                        <a href="#">
                            <h4 className="post-headline">{recipe.RecipeName}</h4>
                        </a>
                        <p>{recipe.details}</p>
                        <div className="post-thumb">
                        <a href="#" className="read-more">Continue Reading..</a>
                         </div>
              
                        
                    </div>
                </div>
            </div>

           

      ) } )}
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
          
);
 
}
  }


export default MainSection;