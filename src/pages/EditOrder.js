import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class EditOrder extends Component {
    constructor(){
        super();
        this.state={
            order:{
            "order_description":"loading...",
            "order_payment_method":"loading...",
            "order_date":"loading...",
            "order_total_price":"loading...",
            "order_address":"loading...",
            },
            description:"",
            payment_method:"",
            address:"",  
            total_price:"",
            date:"" ,
            }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleImage= event =>{
            this.setState({ [event.target.name]:event.target.files[0] })
          }
        componentDidMount()
        {
            axios.get(`http://127.0.0.1:8000/api/orders/${this.props.match.params.order}`)
            .then(
                res=>{this.setState({ order: res.data.data})},
            )
        }
        handleSubmit = event =>{
          event.preventDefault();
          const url = `http://127.0.0.1:8000/api/orders/update/${this.props.match.params.order}`;
          const description=  this.state.description ;
          const payment_method=  this.state.payment_method ;
          const address=  this.state.address ;
          const total_price=  this.state.total_price ;
          const date=  this.state.date ;

          const formData = new FormData(); 
          formData.append('_method','PUT'); 
          formData.append('description',description); 
          formData.append('payment_method',payment_method); 
          formData.append('address',address); 
          formData.append('total_price',total_price); 
          formData.append('date',date); 
        
           

            fetch(url, { method: 'POST', // or 'PUT’
            headers:{ 
                // 'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body:formData, // data can be `string` or {object}!
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>
                {  console.log('Success:', response); 
                   this.props.history.push(`/orders/${this.props.match.params.order}`)
            
                });

            // axios.post(url, formData)
            // .then(
            //     res=>{  
            //         this.props.history.push(`/workshops/${this.props.match.params.workshop}`)},
            // );
        }

render(){
    return(  <div>
        <NavbarSection/>
        <HeaderSection/>
                <div className="container" style={{marginTop:"10px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <h3>عدل طلبك</h3>
                        <div className="form-group">
                                <label>محتويات الطلب</label>
                                <input 
                                    name="description"
                                    type="text" 
                                    className="form-control" 
                                    placeholder={this.state.order.order_description}
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
                                    placeholder={this.state.order.order_address}
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>موعد توصيل الطلب</label>
                                <input 
                                    name="date"
                                    type="text" 
                                    className="form-control" 
                                    placeholder={this.state.order.order_date}
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>الحساب</label>
                                <input 
                                    name="total_price"
                                    type="number" 
                                    className="form-control" 
                                    placeholder={this.state.order.order_total_price}
                                    onChange={this.handleChange} />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">تعديل الطلب</button>
                    </form>
                </div>
        <SocialSection />
    </div>
  
        
   
  );
}
}
export default EditOrder;