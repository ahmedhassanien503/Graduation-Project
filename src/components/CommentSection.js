import React, {Component} from "react";
import axios from "axios";

class CommentSection extends Component{
    constructor() {
        super();
        this.state = {
            comments : []
         };
      }
    
    componentDidMount(){
     axios.get('http://127.0.0.1:8000/api/recipes//comments')
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
       <div></div>
   );}
}
export default ChefSection;