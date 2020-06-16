import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class orderdeleted extends Component {
   
    render(){
        
   return(
       <div>
           <NavbarSection/>
            <HeaderSection/>
            <div className="container">
               
                                    <div className="media-body col-12">
                                      <h3>تم الغاء طلبك بنجاح</h3>
                                      <Link to={`/addorder/${this.props.match.params.chef}`}>
                       <button type="submit" className="btn btn-primary">طلب جديد </button>
</Link>
                                    </div>
                              </div>
                     


              
            <FooterSection/>
       </div>
      
 
    );
}
}
export default orderdeleted;