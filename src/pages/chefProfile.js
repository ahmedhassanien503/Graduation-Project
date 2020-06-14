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


import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class chefProfile extends Component {
    constructor() {
        super();
        this.state = {
            chef : []
         };
      }
    
    componentDidMount(){
     axios.get(`http://127.0.0.1:8000/api/chefs/${this.props.match.params.chef}`)
     .then(res=>{
             console.log(res.data.data)
             this.setState({
                 chef: res.data.data
             });
         })
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
                                <div className="media row">
                                    <div className="media-body col-12">
                                    {/* <SideSection /> */}




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
          <li>
       
         <Link to={`/chef/edit/${this.state.chef.id}`}><button class="btn btn-outline-warning">تعديل الصفحة </button></Link>

          </li>
   
        
          <li>
          
            <Link to={"/addrecipe"}><button class="btn btn-outline-success">أضف وصفة جديدة</button></Link>

          
          </li>
        
        </ul>
      </div>

    </div>

    <div className="sidebar-footer">
   
    </div>
  </nav>

</div>
   

                                    {/* end sidebar */}

                                        {/* <h5 className="mt-0"> {this.state.chef.name} </h5> */}
                                        {/* <p> {this.state.chef.email} </p> */}
                                        {/* <p> {this.state.chef.work_place} </p> */}
                                    </div>
                                </div>
                            </div>
                       {/* <Link to={`/chef/edit/${this.state.chef.id}`}>
                       <p> edit your profile</p></Link> */}



               

                </div>
            </div>
            <FooterSection/>
        </div>
      
 
    );
}
}
export default chefProfile;