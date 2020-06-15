import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';
import Cookies from 'universal-cookie';

class AddOrder extends Component {
    constructor(){
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state={
            description:"",
            payment_method:"",
            address:"",  
            total_price:"",
            date:""   ,
            user_id: User.id,
          }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        };
      
        handleSubmit = event =>{
          event.preventDefault();
          const url ="http://127.0.0.1:8000/api/orders/add";
          const description=  this.state.description ;
          const payment_method=  this.state.payment_method ;
          const address=  this.state.address ;
          const total_price=  this.state.total_price ;
          const date=  this.state.date ;
          const chef_id = this.props.match.params.chef;
          const user_id = this.state.user_id;

          const formData = new FormData(); 
          formData.append('description',description); 
          formData.append('payment_method',payment_method); 
          formData.append('address',address); 
          formData.append('total_price',total_price); 
          formData.append('date',date); 
          formData.append('chef_id',chef_id);
          formData.append('user_id',user_id);
          

     
            axios.post(url, formData)
            .then(
                res=>{  this.props.history.push(`/orders/${res.data.data.id}`)},

            );
        }

render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container" style={{marginTop:"10px"}}>
                        <form onSubmit={this.handleSubmit}>
                            <h3>ضع طلبك هنا</h3>
                            <div className="form-group">
                                    <label>محتويات الطلب</label>
                                    <input 
                                        name="description"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="اكتب محتويات الطلب الخاص بك هنا"
                                        onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                <label for="inputStatus">طريقة الدفع</label>
                <select name="payment_method" class="form-control custom-select" onChange={this.handleChange}>
                  <option selected disabled>اختر طريقة الدفع</option>
                  <option value="Cash">دفع عند وصول الطلب</option>
                  <option value="Credit Card">دفع ببطاقة الائتمان</option>
                </select>
              </div>
                                <div className="form-group">
                                    <label>العنوان</label>
                                    <input 
                                        name="address"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="اكتب العنوان الخاص بك هنا"
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>موعد توصيل الطلب</label>
                                    <input 
                                        name="date"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="    1:30:30 ضع موعد توصيل طلبك على النحو التالى: 1-1-2020  "
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>الحساب</label>
                                    <input 
                                        name="total_price"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="ادخل حساب طلبك هنا"
                                        onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">تأكيد الطلب</button>
                        </form>
                    </div>
            <SocialSection />
        </div>
   
  );
}
}
export default AddOrder;