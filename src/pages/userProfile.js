import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import jQuery from 'jquery';

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class userProfile extends Component {
    constructor() {
        super();
        this.state = {
            user : []
         };
      }
    
    componentDidMount(){
     axios.get(`http://127.0.0.1:8000/api/users/${this.props.match.params.user}`)
     .then(res=>{
             console.log(res.data.data)
             this.setState({
                user: res.data.data
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
                                <img src={`http://127.0.0.1:8000/uploads/user/${this.state.user.image}`} className="mr-3 img-fluid" id="chef-img" alt=""/>  
                                <div className="media row">
                                    <div className="media-body col-12">
                                        <h5 className="mt-0"> {this.state.user.name} </h5>
                                        <p> {this.state.user.email} </p>
                                    </div>
                                </div>
                            </div>
                       <Link to={`/chef/edit/${this.state.user.id}`}>
                       <p> edit user profile</p></Link>

                </div>
            </div>
            <FooterSection/>
        </div>
      
 
    );
}
}
export default userProfile;