import React, {Component} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class SeasonSection extends Component {

    constructor()
    {
        super();
        this.state={
            seasons:[]
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/seasons')
       .then(res=>{this.setState({seasons:res.data.data})});
    
    }
 

    render(){
   return(
  
    <div>
    <div className="container" >
       <br/>
       <br/>
       
    <h2 > اطباقنا الموسمية</h2>
<hr/>
    <div className="row">

        {this.state.seasons.map(season=>{
            return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                <img src={`http://localhost:8000/uploads/seasons/${season.image}`} alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <Link to={`/seasons/${season.id}`}>
                        <h5 >{season.season_name}</h5>
                    </Link>
                </div>
            </div>
        </div>
      ) } )}

    </div>
</div>
</div>
   
  );
}
}
export default SeasonSection;