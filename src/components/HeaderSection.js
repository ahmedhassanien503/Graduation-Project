import React , {Component} from 'react';
class HeaderSection extends Component {
 

  render(){
   
    return (
        <div className="HeaderSection">


        <div className="container">
            <div className="row">
              
                <div className="col-12">
                    <div className="logo_area text-center">
                        <a href="index.html" className="yummy-logo">Ratatouille <i className="fas fa-utensils"></i></a>
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
                                    <a className="nav-link" href="index.html">للتواصل معنا <i className="fas fa-blender-phone"></i> </a>
                                </li>
                              
                                <li className="nav-item">
                                    <a className="nav-link" href="#">من نحن ؟</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> اسأل الشيف</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="archive.html">ورش الطبخ </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">التصنيفات</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">الوصفات</a>
                                    <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                        <a className="dropdown-item" href="index.html">وصفات الطهاة</a>
                                        <a className="dropdown-item" href="archive.html">وصفات الاعضاء</a>
                                   
                                
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><span className="sr-only">(current)</span>الرئيسية </a>
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