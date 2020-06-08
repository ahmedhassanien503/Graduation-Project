import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';

class chefProfile extends Component {
    constructor() {
        super();
        this.state = {
            chefs : []
         };
      }
    
    componentDidMount(){
     axios.get(`http://127.0.0.1:8000/api/chefs/${this.props.match.params.chef}`)
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
                </div>
            </div>
            <FooterSection/>
        </div>
      
 
    );
}
}
export default chefProfile;