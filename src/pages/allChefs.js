import React  ,{Component }from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';

class allChefs extends Component {
    // id=localStorage.setItem('chef_id', this.state.id);
    constructor() {
        super();
        this.state = {
            chefs : []
         };
      }
    
    componentDidMount(){
     axios.get('http://127.0.0.1:8000/api/chefs')
     .then(res=>{
             console.log(res.data.data)
             this.setState({
                 chefs: res.data.data
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
            {this.state.chefs.map(chef=>{
                console.log(chef);
                return(
                    <div className="col-lg-4">
                        <Link to={`/chefs/${chef.id}`}>
                            <img src={`http://127.0.0.1:8000/uploads/${chef.image}`} className="img-fluid" id="chef-img" alt=""/>  
                        </Link>
                        <div className="media row">
                            <div className="media-body col-12">
                                <h5 className=""> {chef.name} </h5>
                                <p> {chef.work_place} </p>
                            </div>
                        </div>
                    </div>
                    
                
                );}
                )}
                </div>
            </div>
            <FooterSection/>
       </div>
   );
    }
}
export default allChefs;