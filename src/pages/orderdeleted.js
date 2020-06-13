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

                                    </div>
                              </div>
                       <Link to={`/addorder`}>
                       <button type="submit" className="btn btn-primary">طلب جديد </button>
</Link>


              
            <FooterSection/>
       </div>
      
 
    );
}
}
export default orderdeleted;