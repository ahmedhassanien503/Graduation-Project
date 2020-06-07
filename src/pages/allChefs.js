import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';

class allChefs extends Component {
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
                                return(
                                   
                                        <div className="col-lg-4 mb-5">
                                            <img src={`http://127.0.0.1:8000/uploads/chef/${chef.image}`} className="mr-3 img-fluid" id="chef-img" alt=""/>  
                                            <div className="media row">
                                                <div className="media-body col-12">
                                                    <h5 className="mt-0"> {chef.name} </h5>
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