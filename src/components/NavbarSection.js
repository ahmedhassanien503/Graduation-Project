import React , {Component} from 'react';

class NavbarSection extends Component {
 

  render(){
   
    return (
        <div className="MainSection">
                                
        <div class="top_header_area">
        <div className="container">
            <div className="row">
                <div className="col-5 col-sm-6">
                    

                    <div className="top_social_bar">
                       
                        <a href="#"><i className="fab fa-facebook" style={{width: "20px"}}></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    
                      
                    </div>
                </div>
 
                <div className="col-7 col-sm-6">
                    <div className="signup-search-area d-flex align-items-center justify-content-end">
                        <div className="login_register_area d-flex">
                            <div className="login">
                                <a href="/login">
                                    تسجيل الدخول</a>
                            </div>
                            <div className="register">
                                <a href="/register">
                                    الاشتراك                          
                                    <i class="fa fa-fw fa-user"></i></a>
                            </div>
                        </div>
                
                     
                
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

);
}
  }


export default NavbarSection;