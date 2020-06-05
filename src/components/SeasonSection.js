import React, {Component} from "react";
import axios from 'axios';
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
       .then(res=>{console.log(res.data.data)});
    
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
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                <img src="img/catagory-img/easter2.jpg" alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <a href="#">
                        <h5 >شم النسيم</h5>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                <img src="img/catagory-img/christmas3.jpg" alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <a href="#">
                        <h5 >رأس السنة</h5>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                <img src="img/catagory-img/mother4.jpg" alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <a href="#">
                        <h5 >عيد الام</h5>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
   
  );
}
}
export default SeasonSection;