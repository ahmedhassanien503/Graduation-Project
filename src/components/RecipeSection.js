import React , {Component} from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

class RecipeSection extends Component {
 
    constructor()
    {
        super();
        this.state={
            categories:[],
        }
    } 

    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/categories')
       .then(res=>{
        this.setState({
            categories:res.data.data,
        })});
    
    }
  render(){


    return (
        <div className="RecipeSection container">

   <section className="welcome-post-sliders">
<h2> تصنيفاتنا من المأكولات تحتوى على كل ما تشتهيه</h2>
<hr/>
{this.state.categories.length && (
<OwlCarousel
    loop
    margin={10}
    nav
    autoplay
    autoplayTimeout={2000}
    autoplayHoverPause={true}
>
{this.state.categories.map(category=>{
            return(
        <div className="welcome-single-slide">
            
            <img src={`http://localhost:8000/uploads/categories/${category.image}`} alt="" width="340" height="240" />
         
  
            <div className="project_title">
            <Link to={`/categories/${category.id}`}>
                    <h5>{category.category_name }</h5>
            </Link>
            </div>
        </div>
 ) } )}
        </OwlCarousel>
            )}
    </section> 
        </div>

);
}
  }


export default RecipeSection;