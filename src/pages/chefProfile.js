import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import profileNavSection from '../components/profileNavSection.js';
import SocialSection from '../components/SocialSection.js';
import SideSection from '../components/SideSection.js';
import jQuery from 'jquery';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.css";
import "./side.js"
import User from './User';
import Cookies from 'universal-cookie';
import "./contact.css";
import  '../../src/assets/css/headerlinks.css';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class chefProfile extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state = {
            chef : [],
            recipes:[],
            menus:[]
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
                }) 
                return  axios.get(`http://127.0.0.1:8000/api/chefs/${this.props.match.params.chef}/menus`);
           
                }).then(res=>{
                this.setState({
                    menus: res.data.data,
                })
            })}
      else{
        axios.get(`http://127.0.0.1:8000/api/chefs/ ${this.props.match.params.chef}`)
        .then(res=>{
                console.log(res.data.users)
                console.log(res.data.recipes)

                this.setState({
                    chef: res.data.users,
                    recipes:res.data.recipes
                }) 
                return  axios.get(`http://127.0.0.1:8000/api/chefs/${this.props.match.params.chef}/menus`);
           
            }).then(res=>{
            this.setState({
                menus: res.data.data,
            })
            })
      }
    }


    render(){
        
   return(
       <div>
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                     
                        <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                            <ul className="navbar-nav" id="yummy-nav">
                             

                                  <li className="nav-item">
                                    
                                    <Link to={"/contactus"} className="nav-link">تواصل معنا 
                                     <i className="fas fa-blender-phone"  style={{width: "25px"}}></i>
                                     </Link> 
                                    
                                  </li>

                                  <li className="nav-item">
                                  <Link to={"/aboutus"} className="nav-link">
                                    من نحن ؟ <i className="far fa-address-card" style={{width: "25px"}}></i>
                                    </Link> 

                                </li>
                                <li className="nav-item">
                                    <Link to={"/askquestion"} className="nav-link" href="#"> اسأل الشيف
                                        <i className="fas fa-comment" style={{width: "25px"}}></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    
                                    <Link to={"/workshops"} className="nav-link"> ورش الطبخ 
                                     <i className="fas fa-users"  style={{width: "25px"}}></i>
                                     </Link> 
                                    
                                  
                                </li>
                                <li className="nav-item">
                                    <Link to={"/categories"} className="nav-link" href="#"> التصنيفات
                                        <i className="fas fa-hamburger" style={{width: "25px"}}></i>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">الوصفات</a>
                                    <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                        <a className="dropdown-item"> <Link to={"/recipes"}>وصفات الطهاه </Link></a>
                                        <a className="dropdown-item"><Link to={"/recipes"}>وصفات الأعضاء </Link> </a>
                                   
                                
                                    </div>
                                </li>
                                <li className="nav-link active">
                                   
                                        <Link to={"/"} style={{color:"#e07b39"}}>  <span className="sr-only">(current)</span>الرئيسية  </Link> 
                                        <i className="fa fa-fw fa-home" style={{width: "25px"},{color:"#e07b39"}}></i>
                                 
                                </li>
                            </ul>
                        </div>
                    </nav>

          <div className="user-profile">
              <div className="container h-100">
                  <div className="row h-100 align-items-center">
                      <div className="col-12">
                          <div className="user-pic text-right ">
                          <img className="img-responsive img-rounded" src={`http://127.0.0.1:8000/uploads/${this.state.chef.image}`}  width="250" height="150" alt=""/>  
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
              <div className="pad-center-title">
          <h4>قائمة الشيف المتاحة للطلبات</h4>
          </div>
                <div className="row">
                    
                {this.state.menus.map(menu=>{
                    return(
                        <div className="col-md-3">
                            
                            <img className="img-fluid" src={`http://localhost:8000/uploads/${menu.image}`}/>
                            <h4>{menu.name}</h4>
                            <span>{menu.price}</span>
                            <p>{menu.description}</p>
                            
                            { this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id  ?
                            <div>
                            <Link to={`/menus/${menu.id}`}> <a className=" edit-btn">تعديل</a></Link>
                            <button className="delete-btn" onClick={() => { this.handleClick(menu.id) }}>حذف</button>
                            </div> 
                            : ""}
                        </div>
                    )}
                )}
                    
                </div>
          </div>
    {/* start sidebar    */}

    <div className="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i className="fas fa-bars"></i>
  </a>
  <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      <div className="sidebar-brand">
        <a href="#">RATATOUILLE</a>
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

          { this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id  ?
          <li>
            <Link to={"/cheforders"}><button class="btn btn-outline-success"> الطلبات الخاصة بالطاهى</button></Link>
          </li> : ""}

          {  this.is_auth && !this.is_auth.is_chef  ?
          <li>
            <Link to={`/addorder/${this.props.match.params.chef}`}><button class="btn btn-outline-success">أضافه طلب</button></Link>
          </li> : ""}

          {this.is_auth && this.props.match.params.chef && !this.is_auth.is_chef?
          <li>
            <Link to={`/userChefWorkshop/${this.props.match.params.chef}`}><button class="btn btn-outline-success"> ورش عمل</button></Link>
          </li> : ""} <hr/>
          { this.is_auth && this.is_auth.is_chef && this.state.chef.id==this.is_auth.id  ?
          <li>
            <Link to={`/createMenu/${this.props.match.params.chef}`}><button class="btn btn-outline-success">   أضف اكله جديدة بالمنيو</button></Link>
          </li> : ""} <hr/>
        </ul>
      </div>

    </div>

    <div className="sidebar-footer">
   
    </div>
  </nav>

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
export default chefProfile;