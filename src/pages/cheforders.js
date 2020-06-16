import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';
import Cookies from 'universal-cookie';

class cheforders extends Component {
    constructor()
    {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state={
            orders:[] ,
        }
    }   
    componentDidMount()
    {
        if(this.is_auth){
        axios.get(`http://127.0.0.1:8000/api/Cheforders/${this.is_auth.id}`)
        .then(
            res=>{            
                // console.log(res.data.data)
                this.setState({ orders: res.data.data})},
            );
         }
    }
     handleSubmit =e=>{
        axios.post(`http://127.0.0.1:8000/api/orders/delete/${e.target.value}`)
        .then(
        res=>{  window.location.reload(false);},
        );
        }
    render(){
    return(
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <h3 style={{ textAlign: "center"  , color: "#d84315"}}> الطلبات الخاصة بك </h3><hr/>
                    {this.is_auth.is_chef ?
                    <Table responsive>
                        <thead>
                            <tr >
                            <th style={{color: "#d84315" , textAlign : "right"}} >رقم</th>
                            <th style={{color: "#d84315" , textAlign : "right"}}  colSpan="2">تفاصيل الطلب</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="3" >عنوان الطلب</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="4" >طريقة الدفع</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="3">الحساب</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="3">موعد وصول الطلب</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} colSpan="3">اسم المستخدم</th>
                            <th style={{color: "#d84315" , textAlign : "right"}} >حذف الطلب</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map((order, i) => (   
                                    <tr>
                                    <td style={{textAlign : "right"}}>{i+1}</td>
                                    <td  style={{textAlign : "right"}} colSpan="2">{order.description}</td>
                            
                                    <td  style={{textAlign : "right"}} colSpan="3">{ order.address}</td>
                                    <td style={{textAlign : "right"}} colSpan="4"> { order.payment_method} </td>
                                    <td style={{textAlign : "right"}} colSpan="3" > {order.total_price}</td>
                                    <td style={{textAlign : "right"}} colSpan="3" > {order.date}</td>
                                    <td style={{textAlign : "right"}} colSpan="3" > {order.user_name.name}</td>

                                    <td style={{textAlign : "right"}}><button className="btn btn-outline-success btn-sm"  value={ order.id} onClick={this.handleSubmit} >   
                                  حذف الطلب </button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table> : ""}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copy_right_text text-center">
                                <p>@2020, Made with <i className="fas fa-heart"></i> by <a href="#" > Ratatouille Team </a> for food lover's.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            <SocialSection /> 
        </div>   
  );
}
}
export default cheforders;