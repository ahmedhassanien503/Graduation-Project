import React, {Component} from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

class ChefSection extends Component {
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
            //  const chefs = res.data;
             this.setState({
                 chefs: res.data.data
             });
         })
    }

    render(){
        
   return(
        

        <div className="container mt-5">
            <h2 className="text-center">ها هم شيفتنا</h2>
            <hr/>
<<<<<<< HEAD
            <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>
                    {/* <div className="carousel-inner">
                    <div className="carousel-item active"> */}
                    {this.state.chefs.length && (
                    <OwlCarousel autoPlay  >
                    
                    <div className="slide-box row">

=======
                <div className="container">
                    {this.state.chefs.length && ( 
                        <div className="slide-box row">
>>>>>>> c4e9b503481403011ca080fe6ba0d4f00d626c25
                            {this.state.chefs.map(chef=>{
                                return(
                                    
                                <div className="col-lg-5 mb-5" id="chef-parent">
                                    <div className="media">
                                       
                                        <Link to={`/chefs/${chef.id}`}> 
                                            <img className="img-fluid" href="" src={`http://127.0.0.1:8000/uploads/${chef.image}`} className="mr-3 img-fluid" id="chef-img" alt=""/>
                                        </Link>
                                       
                                    </div>
                                    <div className="media-body col-12"  id="chef-name">
                                        <h5 className="mt-0"> {chef.name} </h5>
                                            
                                        <p> {chef.work_place} </p>
                                    </div>
                                    
                                </div>
                                
                                );}
                                )}
                        </div>
                    )}
                </div>
                                
        </div>
      
 
    );
}
}
export default ChefSection;