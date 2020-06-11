import React , {Component} from 'react';

//stylesheet;
import  '../../src/assets/css/headerlinks.css';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

class HeaderSection extends Component {
 

  render(){
   
    return (
        <div className="HeaderSection">


        <div className="container">
            <div className="row">
              
                <div className="col-12">
                    <div className="logo_area text-center">
                        <Link to="/" className="yummy-logo"><div> <img src={require('../../src/chefs.svg')} alt=""  width="70" height="80"/></div><div>Ratatouille </div></Link>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                     
                        <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                            <ul className="navbar-nav" id="yummy-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        للتواصل معنا 
                                        <i className="fas fa-blender-phone" style={{width: "25px"}}></i>
                                    </a>
                                </li>
                              
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        من نحن ؟ <i className="far fa-address-card" style={{width: "25px"}}></i>
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> اسأل الشيف
                                        <i className="fas fa-comment" style={{width: "25px"}}></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    
                                    <Link to={"/workshops"} className="nav-link"> ورش الطبخ 
                                     <i className="fas fa-users"  style={{width: "25px"}}></i>
                                     </Link> 
                                    
                                  
                                </li>
                                <li className="nav-item">
                                    <Link to={"/categories"} className="nav-link" href="#"> التصنيفات
                                        <i className="fas fa-hamburger" style={{width: "25px"}}></i>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">الوصفات</a>
                                    <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                        <a className="dropdown-item"> <Link to={"/recipes"}>وصفات الطهاه </Link></a>
                                        <a className="dropdown-item"><Link to={"/recipes"}>وصفات الأعضاء </Link> </a>
                                   
                                
                                    </div>
                                </li>
                                <li className="nav-link active">
                                   
                                        <Link to={"/"} style={{color:"#e07b39"}}>  <span className="sr-only">(current)</span>الرئيسية  </Link> 
                                        <i className="fa fa-fw fa-home" style={{width: "25px"},{color:"#e07b39"}}></i>
                                 
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>


        </div>

);
}
  }



export default HeaderSection;