import React, { useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import '../../Form.css';
import { Redirect } from 'react-router-dom'

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
 import SocialSection from '../components/SocialSection.js';

function Register(){
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
          password.current = watch("password", "");
    const [state, setState] = React.useState(
        {
            name:'',
            email: '',
            password:'',
            password_confirmation: '',
            image: '',
            device_name:'web',
            is_chef:'',
            redirect:false,
        });

    const handleChange = ({target}) =>{
        setState({ ...state, [target.name]: target.value });
        console.log(target);
    };

    const onImageChange = (e) =>{
    console.log(e.target.files[0]); 
      setState({ ...state, [e.target.name]: e.target.files[0]});
    };
    const ProtectedComponent = (data) => {
        if (state.redirect)
        {
            if (data===0)
          {          
            return <Redirect to='/login'  />
          }
          return <div> My Protected Component </div>
        }
  
      };

    const onSubmit = e => {
        // e.preventDefault();   
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
          console.log(state);
          var formData = new FormData(); 
          formData.append("image", state.image); 
          formData.append("email", state.email); 
          formData.append("name", state.name); 
          formData.append("password", state.password); 
          formData.append("is_chef",state.is_chef);
          formData.append("password_confirmation", state.password_confirmation);
          formData.append("device_name", state.device_name); 

          axios({ method: 'post', url: 'http://localhost:8000/api/register', data: formData, 
                  headers: {'Content-Type': 'multipart/form-data' } } ).then(res => {
                console.log(res);
                setState({ ...state, redirect:true}) 
        
            }).catch(error => {
                console.log(error.response)
            }); 
        });
};
        
return (

    <div>
    {ProtectedComponent(0)}
    <NavbarSection/>
    <HeaderSection/>
            <div className="container" style={{marginTop:"10px"}}>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <h3>ادخل بياناتك لعالم الطهى و الاكلات الشهية</h3>
                        <div className="form-group">
                            <label>الاسم الثلاثى للمستخدم</label>
                                  <input type="text" name="name" className="form-control"                                 
                                placeholder="ادخل اسمك هنا"
                                   onChange={handleChange} ref={register({ required: true, minLength:3 })} />
                            <span className="errors">
                                {errors.name && errors.name.type ===  'required' && 
                                'يجب ادخال اسم المستخدم'}
                                {errors.name && errors.name.type ===  'minLength' && 
                                'يجب ان لا يقل اسم المستخدم عن ثلاثة حروف'}
                                {errors.name ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}
                            </span>
                        </div>
                       

                        <div className="form-group">
                            <label>البريد الالكترونى</label>
                                  <input type="email" name="email" className="form-control"                             
                                placeholder="ادخل البريد الالكترونى الخاص بك هنا"

                                   onChange={handleChange} ref={register({ required: true, 
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} /> 
                            <span className="errors">
                                {errors.email && errors.email.type ===  'required' && 
                                'يجب ادخال البريد الالكترونى'}
                                {errors.email && errors.email.type ===  'pattern' && 
                    'صيغة البريد الالكترونى غير صحيحة'}
                                {errors.email ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}
                            </span>
                        </div>

                         <div className="form-group">
                            <label>الصورة الشخصية</label>
                            <input type="file" name="image" className="form-control"
                               onChange={onImageChange} ref={register({
                                   pattern:/^([a-zA-Z0-9\s_\\.\-\\:])+(.jpeg|.png|.jpg|.gif|.svg)$/i })} /> 
                            <span className="errors">
                               
                                {errors.image && errors.image.type ===  'pattern' && 
                                'الصورة يجب ان تكون بصيغة: jpeg, png, jpg, gif, svg فقط'}
                                {errors.image ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}
                            </span>
                        </div>

                        <div className="form-group">
                            <label>كلمة السر</label>
                            <input type="password" name="password" className="form-control"
                                placeholder="ادخل كلمة السر الخاصة بك هنا"
                              onChange={handleChange} ref={register({ required: true , minLength:6})} /> 
                            <span className="errors"> 
                                {errors.password && errors.password.type ===  'required' && 
                                'يجب ادخال كلمة السر!'} 
                                {errors.password && errors.password.type ===  'minLength' && 
                                'كلمة السر يجب ان لا تقل عن ستة احرف'}
                                {errors.password ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}               
                            </span> 
                        </div>

                        <div className="form-group">
                            <label>تأكيد كلمة السر</label>
                            <input type="password" name="password_confirmation" className="form-control"
                                placeholder="ادخل تأكيد كلمة السر الخاصة بك هنا"
                                onChange={handleChange} ref={register({ required: true , minLength:6 
                                    ,validate: value => value === password.current })} /> 
                            <span className="errors">
                                {errors.password_confirmation && 
                                errors.password_confirmation.type ===  'required' && 
                                'يجب كلمة السر الخاصة بك'}
                                {errors.password_confirmation && 
                                errors.password_confirmation.type ===  'minLength' && 
                                'يجب ان لا يقل تأكيد كلمة السر عن ستة احرف'}
                                {errors.password_confirmation && 
                                errors.password_confirmation.type ===  'validate' && 
                                'تأكيد كلمة السر غير مطابق لكلمة السر الاصلية'}
                                {errors.password_confirmation ?(<FontAwesomeIcon className="ml-2" 
                                icon={faTimesCircle} />) : ""}         
                            </span>
                        </div>


                        <div className="form-group">
                            <label> هل تريد ان تسجل معنا كواحد من الطهاة؟ </label>
                            <br></br>
                            <label class="checkbox-inline" >
                            <input type="checkbox" value="1" name="is_chef" className="form-control"
                                   onChange={handleChange} ref={register({})} /> 
                                    نعم </label>
                        </div>
                        
                    
                        <button type="submit" className="btn btn-primary"> الاشتراك</button>
                </form>
            </div>
    <SocialSection />
</div>

        );
}

 
export default Register;



