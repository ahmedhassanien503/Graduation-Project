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
     axios.get('http://127.0.0.1:8000/api/chef')
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
        

        <div className="container" >
            <h2 className="text-center">ها هم شيفتنا</h2>
            <hr/>
        
                
                <div >
                 
                        <div >
                            
{/*                                                    
                                        // <Link to={`/chefs/${chef.id}`}> 
                                        //     <img style={{paddingLeft:"10px;"}}  href="" src={`http://127.0.0.1:8000/uploads/${chef.image}`} alt=""/>
                                        // </Link>  */}

                                        <div className="row">
                                           
                      {this.state.chefs.map(chef=>{
                                            return(  
                                                <div className="col-3">


                                 
                                            <div className="card border-warning">
                                    <div className="card-header">{chef.name}</div>
                                    <div className="card-body text-warning">
                                        <h5 className="card-title">{chef.work_place}</h5>
                                         <Link to={`/chefs/${chef.id}`}> 
                                        <p className="card-text"> <img style={{width:"200px,",height:"200px"}}  href="" src={`http://127.0.0.1:8000/uploads/${chef.image}`} alt=""/></p>
                                         </Link>  
                                    </div>
                                    </div>
                                  
                                
                                        </div>   
                                        
                                        );}
                                )}
                                        
                                              
                                    
                                </div>

                          
                             
                                
                                
                        </div>
                    
                </div>
                                
 
         </div>
      
 
    );
}
}
export default ChefSection;