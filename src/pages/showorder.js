import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';

import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
class showorder extends Component {
    constructor() {
        super();
        this.state = {
            order : []
         };
      }
    
    componentDidMount(){
     axios.get(`http://127.0.0.1:8000/api/orders/${this.props.match.params.order}`)
     .then(res=>{
             console.log(res.data.data)
             this.setState({
                 order: res.data.data
             });
         })
    }

    onDelete(id)
    {
        axios.delete(`http://127.0.0.1:8000/api/orders/delete/${this.props.match.params.order}`)
        .then(response=>{
            this.props.history.push('/orderdeleted');

        }

        );
    }

    render(){
        
   return(
       <div>
           <NavbarSection/>
            <HeaderSection/>
            <div className="container">
                <div className="row">
                    
                            <div className="col-lg-4 mb-5">
                                <div className="media row">
                                    <div className="media-body col-12">
                                        <h3>تم تسجيل الطلب بنجاح</h3>
                                        <h5 className="mt-0"> {this.state.order.description} </h5>
                                        <p> {this.state.order.payment_method} </p>
                                        <p> {this.state.order.address} </p>
                                        <p> {this.state.order.total_price} </p>
                                        <p> {this.state.order.date} </p>


                                    </div>
                                </div>
                            </div>
                       <Link to={`/editorder/${this.state.order.id}`}>
                       <button type="submit" className="btn btn-primary">عدل طلبك </button>
</Link>
<button type="submit" className="btn btn-primary" onClick={this.onDelete.bind(this,this.state.order.id)}> الغاء الطلب </button>


                </div>
            </div>
            <FooterSection/>
        </div>
      
 
    );
}
}
export default showorder;