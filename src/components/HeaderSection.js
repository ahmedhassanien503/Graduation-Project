import React , {Component} from 'react';
class HeaderSection extends Component {
 

  render(){
   
    return (
        <div className="HeaderSection">


        <div className="container">
            <div className="row">
              
                <div className="col-12">
                    <div className="logo_area text-center">
                        <a href="index.html" className="yummy-logo">Ratatouille</a>
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
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                        <a className="dropdown-item" href="index.html">Home</a>
                                        <a className="dropdown-item" href="archive.html">Archive</a>
                                        <a className="dropdown-item" href="single.html">Single Blog</a>
                                        <a className="dropdown-item" href="static.html">Static Page</a>
                                        <a className="dropdown-item" href="contact.html">Contact</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="archive.html">Archive</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
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