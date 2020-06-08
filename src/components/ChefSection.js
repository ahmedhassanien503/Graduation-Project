import React, {Component} from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
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
            <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                                     <div className="carousel-item active">
                                     <div className="slide-box row">
                    
                        {/* <Carousel autoPlay activeIndex={2} items={2}> */}
                           
                            {this.state.chefs.map(chef=>{
                                return(
                                    
                                    <div className="col-lg-6 mb-5">
                                    <div className="media row">
                                        <div className="col-12" >
                                        <Link to={`/chefs/${chef.id}`}> 
                                            <img href="" src={`http://127.0.0.1:8000/uploads/chef/${chef.image}`} className="mr-3 img-fluid" id="chef-img" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="media-body col-12"  id="chef-name">
                                    <h5 className="mt-0"> {chef.name} </h5>
                                       
                                    <p> {chef.work_place} </p>
                                    </div>
                                    
                                    <div className="row">
                                    
                                        <p className="col-12 content">يمكنك كتابة تفاصيل هنا عن أحد أعضاء فريقك. يمكنك إعطاء مزيد من التفاصيل حول ما يفعلونه. لا تتردد في الإضافة
                                            بعض <a href="#">الروابط</a> ليتمكن الأشخاص من متابعتهم خارج الموقع.</p>
                                    </div>
                                </div>
                                
                                );}
                                )}
                                

                                
                            
                            {/* </Carousel> */}
                       
                        
                         {/* <div className="carousel-item">
                            <div className="slide-box row">
                            

                               
                            </div>
                        </div>  */}
                    </div>
                                </div>
                                </div>
                 </div>
                </div>
      
 
    );
}
}
export default ChefSection;