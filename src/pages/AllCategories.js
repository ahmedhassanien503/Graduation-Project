import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class AllCategories extends Component {

    constructor()
    {
        super();
        this.state={
            categories:[]
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/categories')
       .then(
           res=>{this.setState({ categories: res.data.data})},
           );

    }
 
    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
            <div>
    <div className="container" >
       <br/>
       <br/>
       
    <h2 style={{ textAlign: "center", color:"orange"}} >  التصنيفات </h2>
<hr/>
    <div className="row">

        {this.state.categories.map(category=>{
            return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                <img src={`http://localhost:8000/uploads/categories/${category.image}`} alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <Link to={`/categories/${category.id}`}>
                        <h5 >{category.category_name}</h5>
                    </Link>
                </div>
            </div>
        </div>
      ) } )}
       <div>
        
        </div>
      </div>
  </div>
 
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
export default AllCategories;