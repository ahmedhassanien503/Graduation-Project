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
                        <a href="index.html" className="yummy-logo">Ratatouille <img src="img/chefs.svg" alt=""  width="60" height="70"/></a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                     
                        <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                            <ul className="navbar-nav" id="yummy-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">
                                        للتواصل معنا 
                                        <i className="fas fa-blender-phone" style={{width: "25px"}}></i>
                                    </a>
                                </li>
                              
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        من نحن ؟ <i class="far fa-address-card" style={{width: "25px"}}></i>
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> اسأل الشيف
                                        <i class="fas fa-comment" style={{width: "25px"}}></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshops">
                                    <Link to={"/workshops"}> ورش الطبخ </Link> 
                                     <i class="fas fa-users"  style={{width: "25px"}}></i></a>
                                  
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> التصنيفات
                                        <i class="fas fa-hamburger" style={{width: "25px"}}></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">الوصفات</a>
                                    <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                        <a className="dropdown-item" href="index.html">وصفات الطهاة</a>
                                        <a className="dropdown-item" href="archive.html">وصفات الاعضاء</a>
                                   
                                
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <Link to={"/"}>  <span className="sr-only">(current)</span>الرئيسية  </Link> 
                                        <i class="fa fa-fw fa-home" style={{width: "25px"}}></i>
                                    </a>
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