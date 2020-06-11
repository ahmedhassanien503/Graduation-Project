import React, { useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import '../../Form.css';
import { Redirect } from 'react-router-dom'

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
    <div className="container mb-3">
            {ProtectedComponent(0)}

        <div className="page-content">
            <div className="form-v7-content">
                <div className="form-left">
                    <img src="images/login.gif"
                         className="m-lg-5 p-1 img-fluid" alt="register"/>
                </div>
                <form className="form-detail" id="myform" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-weight-bold mb-5 p-2 text-white text-center"
                        style={{backgroundColor: "#24c0d1"}}>Register</h3>
                    <div className="container">              
                        <div className="form-row">
                            <label htmlFor="name" className=" font-weight-bold"> Username </label>
                            <input type="text" name="name" className="input-text" 
                                   onChange={handleChange} ref={register({ required: true, minLength:3 })} />
                            <span className="errors">
                                {errors.name && errors.name.type ===  'required' && 
                                'Username is required, you have to fill it!'}
                                {errors.name && errors.name.type ===  'minLength' && 
                                'Username must be at least 3 characters'}
                                {errors.name ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}
                            </span>
                        </div>
                        <div className="form-row">
                            <label htmlFor="email" className=" font-weight-bold"> Email </label>
                            <input type="email" name="email" className="input-text" 
                                   onChange={handleChange} ref={register({ required: true, 
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} /> 
                            <span className="errors">
                                {errors.email && errors.email.type ===  'required' && 
                                'Email is required, you have to fill it!'}
                                {errors.email && errors.email.type ===  'pattern' && 
                                'The email format is invalid, the format must be like EX: mayar@gmail.com'}
                                {errors.email ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}
                            </span>
                        </div>
                        <div className="form-row">
                            <label htmlFor="image" className=" font-weight-bold"> Avatar </label> 
                            <input type="file" name="image" className="input-file" 
                                   onChange={onImageChange} ref={register({ required: true ,
                                   pattern:/^([a-zA-Z0-9\s_\\.\-\\:])+(.jpeg|.png|.jpg|.gif|.svg)$/i })} /> 
                            <span className="errors">
                                {errors.image && errors.image.type ===  'required' && 
                                'Avatar is required, you have to choose your avatar'}
                                {errors.image && errors.image.type ===  'pattern' && 
                                'Avatar must be a file of type: jpeg, png, jpg, gif, svg ONLY'}
                                {errors.image ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}
                            </span>
                        </div>
                        <div className="form-row">
                            <label htmlFor="password" className=" font-weight-bold "> Password </label> 
                            <input type="password" name="password" className="input-text" 
                            onChange={handleChange} ref={register({ required: true , minLength:6})} /> 
                            <span className="errors"> 
                                {errors.password && errors.password.type ===  'required' && 
                                'Password is required, you have to fill it!'} 
                                {errors.password && errors.password.type ===  'minLength' && 
                                'Password must be at least 6 characters'}
                                {errors.password ?(<FontAwesomeIcon className="ml-2" icon={faTimesCircle} />) : ""}               
                            </span> 
                        </div>
                        <div className="form-row">
                            <label htmlFor="password_confirmation" className=" font-weight-bold"> 
                                   Password Confirmation </label> 
                            <input type="password" name="password_confirmation" className="input-text" 
                                   onChange={handleChange} ref={register({ required: true , minLength:6 
                                    ,validate: value => value === password.current })} /> 
                            <span className="errors">
                                {errors.password_confirmation && 
                                errors.password_confirmation.type ===  'required' && 
                                'Password confirmation is required, you have to fill it!'}
                                {errors.password_confirmation && 
                                errors.password_confirmation.type ===  'minLength' && 
                                'Password confirmation must be at least 6 characters'}
                                {errors.password_confirmation && 
                                errors.password_confirmation.type ===  'validate' && 
                                'Password confirmation does not match'}
                                {errors.password_confirmation ?(<FontAwesomeIcon className="ml-2" 
                                icon={faTimesCircle} />) : ""}         
                            </span>
                        </div>
                        <div className="form-row">
                            <label htmlFor="is_chef" className=" font-weight-bold"> is_chef </label>
                            <label class="checkbox-inline">
                            <input type="checkbox" value="1" name="is_chef" className="input-text" 
                                   onChange={handleChange} /> 
                                    Yes </label>
                        </div>
                        <div className="form-row-last">
                            <input type="submit" value="Register" className="login btn font-weight-bold"/>
                        </div> 
                    </div>  
                </form>
            </div> 
        </div>
    </div>
        );
}

 
export default Register;





 


// import React, { Component } from "react";
// import axios from "axios";
// import cookie from "js-cookie";
// import Error from "./components/Error";
// import Layout from "./components/Layout";

// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       password_confirmation: "",
//       errors: {}
//     };
//   }
//   handleForm = e => {
//     e.preventDefault();
//     const data = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password_confirmation: this.state.password_confirmation
//     };
//     axios
//       .post("http://localhost:8000/api/auth/register", data)
//       .then(res => {
//         cookie.set("token", res.data.access_token);
//         cookie.set("user", res.data.user);
//         this.props.history.push("/profile");
//       })
//       .catch(e => this.setState({ errors: e.response.data.errors }));
//   };
//   handleInput = e => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({ [name]: value });
//   };
//   render() {
//     return (
//       <Layout>
//       <div className="flex">
//         <div className="w-1/3" />
//         <div className="w-1/3 mt-10 p-4 bg-white">
//           <form className="border border-gray-500" onSubmit={this.handleForm}>
//             <div className="p-4">
//               <h1 className="text-lg border-b border-gray-500">اشترك معنا الان</h1>
//               <div className="mt-4">
//                 <label>الاسم الثلاثى</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="ادخل اسمك هنا"
//                   onChange={this.handleInput}
//                   className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
//                 />
//                 <Error
//                   error={
//                     this.state.errors["name"] ? this.state.errors["name"] : null
//                   }
//                 />
//               </div>
//               <div className="mt-4">
//                 <label>البريد الالكترونى</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="ادخل بريدك الاكترونى"
//                   onChange={this.handleInput}
//                   className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
//                 />
//                 <Error
//                   error={
//                     this.state.errors["email"]
//                       ? this.state.errors["email"]
//                       : null
//                   }
//                 />
//               </div>
//               <div className="mt-4">
//                 <label>كلمة السر</label>
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={this.handleInput}
//                   placeholder="ادخل كلمة السر الخاصة بك "
//                   className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
//                 />
//                 <Error
//                   error={
//                     this.state.errors["password"]
//                       ? this.state.errors["password"]
//                       : null
//                   }
//                 />
//               </div>
//               <div className="mt-4">
//                 <label>تأكيد كلمة السر</label>
//                 <input
//                   type="password"
//                   name="password_confirmation"
//                   onChange={this.handleInput}
//                   placeholder="ادخل تأكيد كلمة السر هنا"
//                   className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
//                 />
//               </div>
//               <div className="mt-4">
//                 <input
//                   type="submit"
//                   value="تسجيل"
//                   className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       </Layout>

//     );
//   }
// }
