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
       axios.get('http://127.0.0.1:8000/api/rec')
       .then(result=>{this.setState({
           recipes:result.data.data,
           itemsCountPerPage:result.data.meta.per_page,
           totalItemsCount:result.data.meta.total,
           activePage:result.data.meta.current_page,
           
        
        })});

    }
   
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/rec?page='+pageNumber)
        .then(result=>{
            this.setState({
                recipes:result.data.data,
                itemsCountPerPage:result.data.meta.per_page,
                totalItemsCount:result.data.meta.total,
                activePage:result.data.meta.current_page,
                

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
                
                    {/* <div className="post-thumb">
                    <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" />

                    </div> */}
                          <div className="post-thumb"><Link to={`/recipe/${recipe.id}`}> 
                        <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" />
                             </Link>
                        </div>
                 
                    <div className="post-content">
                        <div className="post-meta d-flex">
                            <div className="post-author-date-area d-flex">
                             
                                <div >
                                    <h5 style={{color:"#FF8C00"}}> {recipe.name}</h5>
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
                        <h6>{recipe.title}</h6>


                         <div className="post-thumb"><Link to={`/recipe/${recipe.id}`}> 
                         {/* <p >... اقرأ التفاصيل</p> */}
                         <button  className="btn contact-btn">اقراأ التفاصيل</button>

                             </Link>
                        </div>
              
                        
                    </div>
                </div>
            </div>

           

      ) } )}
          <div className="d-flex justify-content-center" >
           <div className="pagination-area d-sm-flex mt-15">
            <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass='page-item'
                    linkClass='page-link'
                    innerClass='pagination pagination-sm'
                    
            />
            </div>
        </div>  

         </div>
          
);
 
}
  }


export default MainSection;