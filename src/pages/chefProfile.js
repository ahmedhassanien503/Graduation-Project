import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import jQuery from 'jquery';

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
                                        <h5 className="mt-0"> {this.state.chef.name} </h5>
                                        <p> {this.state.chef.email} </p>
                                        <p> {this.state.chef.work_place} </p>
                                    </div>
                                </div>
                            </div>
                       <Link to={`/chef/edit/${this.state.chef.id}`}>
                       <p> edit your profile</p></Link>

                </div>
            </div>
            <FooterSection/>
        </div>
      
 
    );
}
}
export default chefProfile;