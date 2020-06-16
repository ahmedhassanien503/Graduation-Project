import React from 'react';
import axios from 'axios';
// import '../../Form.css'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import UserData from './userdata';

import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';
// import "./contact.css";

function Login(){
    const cookies = new Cookies();
    let role='';
    const [state, setState] = React.useState(
        {
            email: '',
            password: '',
            device_name:'web',
            redirect:false,
        });

    const handleChange = ({target}) =>{
        setState({ ...state, [target.name]: target.value });
    };
    //redirect function
    const ProtectedComponent = (data) => {
        if (state.redirect)
        {
            if (data===0)
          {               return <Redirect to='/'  />
   
            //   if(User.is_chef ===0)    
            // {return <Redirect to='/userprofile'  />}
            // if(User.is_chef ===1)
            // {return <Redirect to='/chefprofile'/>}
          }
          return <div> My Protected Component </div>
        }
  
      }

    const onSubmit = e => {
        e.preventDefault();  
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.post('http://localhost:8000/api/login',state).then(res => {
                //save cookie
                /* console.log(res.data); */
                
                cookies.set('UserToken', res.data,{ path: '/' ,expires: new Date(Date.now()+2592000)});
                role=cookies.get('UserToken');
                UserData(res.data);
                setState({ ...state, redirect:true}) 
            }).catch(error => {
                console.log(error.response)
            }); 
        });
    };
     
return ( <div>
    {ProtectedComponent(0)}
    <NavbarSection />
    <HeaderSection />
    {/* <form onSubmit={onSubmit}>
            <h3>سجل دخولك لعالم الطهى و الاكلات الشهية</h3>
            <div className="form-group">
                <label>البريد الالكترونى</label>
                <input
                    type="email" name="email" id="your_email"
                    className="form-control"
                    placeholder="ادخل بريدك الالكترونى هنا"
                    value={state.email} onChange={handleChange} required />
            </div> 

            <div className="form-group">
                <label>كلمة السر</label>
                <input
                    type="password" name="password" id="password"

                    className="form-control"
                    placeholder="ادخل كلمة السر الخاصة بك هنا"
                    value={state.password} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary">تسجيل الدخول</button>
            <br></br>
            <a href="/register" class="stretched-link">هل تريد انشاء حساب جديد؟</a>

        </form> */}



<div className="contact-form-area" className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="contact-form-sidebar " data-wow-delay="0.3s" >
                        <p> . </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 item">
                        <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s">
                            <h2 style={{color:"#FF8C00",textAlign:"right"}}> الأن يمكنك الانضمام لنا وبكل سهولة</h2>
                            
                         <form onSubmit={onSubmit} >
                                <div className="form-group" style={{textAlign:"right"}}>
                                <label style={{textAlign:"right"}}>البريد الالكترونى</label>
                                <input
                                    type="email" name="email" id="your_email"
                                    className="form-control"
                                    placeholder="ادخل بريدك الالكترونى هنا"
                                    value={state.email} onChange={handleChange} 
                                    style={{textAlign:"right"}} />
                                </div>
                                <div className="form-group"style={{textAlign:"right"}}>
                            <label style={{textAlign:"right"}}>كلمة السر</label>
                            <input
                                type="password" name="password" id="password"

                                className="form-control"
                                placeholder="ادخل كلمة السر الخاصة بك هنا"
                                value={state.password} onChange={handleChange} 
                                style={{textAlign:"right"}}/>
                                </div>
                             
                                <button type="submit" className="btn contact-btn">تسجيل الدخول</button>
                                <a href="/register" class="stretched-link">هل تريد انشاء حساب جديد؟</a>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    <SocialSection />
</div>
         );
}


 
export default Login;