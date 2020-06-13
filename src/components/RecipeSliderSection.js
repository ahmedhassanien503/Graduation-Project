import React , {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";


class RecipeSliderSection extends Component {

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
   
    return (


 <div className="instargram_area section_padding_100_0 clearfix" id="portfolio"> 
{/* {this.state.recipes.map(recipe=>{
            return( */}
{this.state.recipes.length && (
  <OwlCarousel
    loop
    margin={3}
    nav
    autoplay
    autoplayTimeout={1500}
    autoplayHoverPause={true}
    
  >   

{this.state.recipes.map(recipe=>{
            return(

  
      <div className="instagram_gallery_item">
   
   <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" width="340" height="400" />
   
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                      <Link to={`/recipe/${recipe.id}`}> <i className="fa fa-instagram" aria-hidden="true"></i><h2>{recipe.RecipeName} </h2></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

 
     
            )})}
  
  

        </OwlCarousel>
)}
        </div>

    );
}
  }



export default RecipeSliderSection;