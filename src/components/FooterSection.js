import React , {Component} from 'react';
class FooterSection extends Component {

  render(){
   
    return (

<footer className="footer_area">
<div className="container">
    <div className="row">
        <div className="col-12">
            <div className="footer-content">
              
                <div className="footer-logo-area text-center">
                    <a href="index.html" className="yummy-logo">Ratatouille</a>
                </div>
             
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-footer-nav" aria-controls="yummyfood-footer-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                
                    <div className="collapse navbar-collapse justify-content-center" id="yummyfood-footer-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Archive</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
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
                <p>Copyright @2020 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by Ratatouille Team </p>
            </div>
        </div>
    </div>
</div>
</footer>

);
}
  }



export default FooterSection;
