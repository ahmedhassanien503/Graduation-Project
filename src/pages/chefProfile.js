import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SideSection from '../components/SideSection.js';
// import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import jQuery from 'jquery';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.css";
import "./side.js"
import User from './User';
import Cookies from 'universal-cookie';


import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class chefProfile extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state = {
            chef : [],
            recipes:[]
         };
      }
    
    componentDidMount(){
   
        //  axios.get(`http://127.0.0.1:8000/api/chefrecipes/${this.is_auth.id}`)
        //  .then(res=>{
        //     console.log(res.data.data)
        //     this.setState({
        //         recipes: res.data.data
        //     })
        //    console.log(this.state.recipes[0].details)
        // })
   
              
       
      if(this.is_auth  && this.is_auth.is_chef && !this.props.match.params.chef ){
        console.log(this.is_auth.id);
        axios.get(`http://127.0.0.1:8000/api/chefs/${this.is_auth.id}`)
        .then(res=>{
                console.log(res.data.users)
                console.log(res.data.recipes)

                this.setState({
                    chef: res.data.users,
                    recipes:res.data.recipes
                }) })}
      else{
        axios.get(`http://127.0.0.1:8000/api/chefs/ ${this.props.match.params.chef}`)
        .then(res=>{
                console.log(res.data.users)
                console.log(res.data.recipes)

                this.setState({
                    chef: res.data.users,
                    recipes:res.data.recipes
                }) })
      }
    }


    render(){
        
   return(
       <div>
           <NavbarSection/>
            <HeaderSection/>
    
            <div className="container">
                <div className="row">
                            <div className="col-lg-4 mb-5">

                                <img src={`http://127.0.0.1:8000/uploads/${this.state.chef.image}`} className="mr-3 img-fluid" id="chef-img" alt=""/>  
                             </div>
                                    
            {/* <div className="row">
            {this.state.recipes.map(recipe=>{
            return(
               
                  <div className="col-4">
                <div className="card border-info mb-3" style={{maxWidth:"18rem;"}}>
                <div className="car
                d-header">{recipe.RecipeName}</div>
                <div className="card-body text-info">
                    <h5 className="card-title">{recipe.RecipeName}</h5>
                    <p className="card-text"> <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" /></p>
                </div>
                </div>
                </div>



                
            )})}
        </div>
       */}

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
          

                    

    {/* start sidebar    */}



    <div className="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i className="fas fa-bars"></i>
  </a>
  <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      <div className="sidebar-brand">
        <a href="#">RATATOILLE</a>
        <div id="close-sidebar">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="sidebar-header">
        <div className="user-pic">
          <img className="img-responsive img-rounded" src={`http://127.0.0.1:8000/uploads/${this.state.chef.image}`} />
        </div>
        <div className="user-info">
          <span className="user-name">
            <strong>{this.state.chef.name} </strong>
          </span>
          <span className="user-status">
            <i className="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
<hr></hr>     
   <div className="user-info">
        <span className="user-role">{this.state.chef.email}</span>
        </div>
      </div>
    

      <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <div className="user-info">
                <span>
                <p> {this.state.chef.work_place}  </p>
                </span>
               </div>
              
          </li>
          {  this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id ?
          <li>
         <Link to={`/chef/edit/${this.state.chef.id}`}><button class="btn btn-outline-warning">تعديل الصفحة </button></Link>
          </li> : ""}
          {  this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id ?
          <li>
            <Link to={"/addrecipe"}><button class="btn btn-outline-success">أضف وصفة جديدة</button></Link>
          </li> : ""} <hr/>
          {  this.is_auth && this.is_auth.is_chef&& this.state.chef.id== this.is_auth.id   ?
          <li style={{fontWeight:"bold" ,textAlign: "center" , color: "white"}}>  ورش العمل</li>
            : ""}
          {  this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id  ?
          <li>
            <Link to={"/createWorkshop"}><button class="btn btn-outline-success">أضافه ورشه عمل</button></Link>
          </li> : ""}
                  
          { this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id  ?
          <li>
            <Link to={"/chefWorkshops"}><button class="btn btn-outline-success"> ورش عمل</button></Link>
          </li> : ""}

          {this.is_auth && this.props.match.params.chef && !this.is_auth.is_chef?
          <li>
            <Link to={`/userChefWorkshop/${this.props.match.params.chef}`}><button class="btn btn-outline-success"> ورش عمل</button></Link>
          </li> : ""} <hr/>
        </ul>
      </div>

    </div>

    <div className="sidebar-footer">
   
    </div>
  </nav>

</div>


</div>
</div>
                  

             
           
 
    <FooterSection/>
</div>
      
 
    );
}
}
export default chefProfile;