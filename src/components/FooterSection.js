import React , {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class FooterSection extends Component {

  render(){
   
    return (

<footer className="footer_area">
<div className="container">
    <div className="row">
        <div className="col-12">
            <div className="footer-content">
              
                <div className="footer-logo-area text-center">
                    <a href="index.html" className="yummy-logo">Ratatouille  <img src={require('../../src/chefs.svg')} alt=""  width="70" height="80"/></a>
                </div>
             
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-footer-nav" aria-controls="yummyfood-footer-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                
                    <div className="collapse navbar-collapse justify-content-center" id="yummyfood-footer-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> للتواصل معنا </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">من نحن ؟</a>
                            </li>
                            <li className="nav-item">
                                <Link to={"/askquestion"} className="nav-link" href="#">  اسأل الشيف <i className="fas fa-comment" style={{width: "25px"}}></i></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ورش الطبخ</a>
                            </li>
                            <li className="nav-item">
                            <Link to={"/categories"} className="nav-link" href="#"> التصنيفات
                                        <i className="fas fa-hamburger" style={{width: "25px"}}></i>
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">الرئيسية <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
        <div className="col-12">
          
            <div className="copy_right_text text-center">
                <p>@2020, Made with <i className="fas fa-heart"></i> by <a href="#" > Ratatouille Team </a> for food lover's.</p>
            </div>
        </div>
    </div>
</div>
</footer>

);
}
  }



export default FooterSection;
