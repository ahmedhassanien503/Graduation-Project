import React , {Component} from 'react';
import Cookies from 'universal-cookie';
import User from '../pages/User';


const cookies = new Cookies();
const is_auth = cookies.get('UserData');

class NavbarSection extends Component {
 

  render(){
   
    return (
        <div className="MainSection">
                                
        <div className="top_header_area">
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
                        {!is_auth?
                         (
                            <div className="login">
                                <a href="/login">
                                     تسجيل الدخول</a>
                                    <a href="/register"> الاشتراك</a>
                            </div> 
                            //     <div className="register">
                            //     <a href="/register">
                            //         الاشتراك                          
                            //         <i class="fa fa-fw fa-user"></i></a>
                            // </div>
                          ) :
                            (
                                <div className="login">
                                <a href="/logout">
                               تسجيل الخروج</a>
                            </div> 
                            )
  }

   {is_auth && is_auth.is_chef?
           (
                    <div className="login">
                     <a href="/chefprofile">
                        حساب الطاهى</a>
                     </div>  
                        ): null
        }
   {is_auth && !is_auth.is_chef? 
           (
                     <div className="login">
                    <a href="/userprofile">
                    حساب المستخدم </a>
                   </div>      
                     ): null
        }
    
                        
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