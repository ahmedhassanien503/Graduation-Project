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
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      
                    </div>
                </div>
 
                <div className="col-7 col-sm-6">
                    <div className="signup-search-area d-flex align-items-center justify-content-end">
                        <div className="login_register_area d-flex">
                            <div className="login">
                                <a href="register.html">Sing in</a>
                            </div>
                            <div className="register">
                                <a href="register.html">Sing up</a>
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