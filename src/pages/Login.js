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
    <div className="container" style={{ marginTop: "10px" }}>
        <form onSubmit={onSubmit}>
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

        </form>
    </div>
    <SocialSection />
</div>
         );
}


 
export default Login;