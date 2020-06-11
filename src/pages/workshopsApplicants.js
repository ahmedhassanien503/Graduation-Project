import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';
// import fetch from 'unfetch';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class workshopsApplicants extends Component {

    constructor()
    {
        super();
        this.state={
            workshopApplicants:[],
            id:"",
        }
    }
    
    componentDidMount()
    {
        axios.get(`http://127.0.0.1:8000/api/workshopApplicants/${this.props.match.params.workshop}`)
        .then(
            res=>{this.setState({ workshopApplicants: res.data.data})},
            );
    }
    
    
    getData = async (id) =>
    { 
        const res = await axios(`http://127.0.0.1:8000/api/applicants/${id}`);
        return await res.data.data; 
    } 

    handleSubmit = e =>{
        // event.preventDefault();

        // this.setState({applicant: `${click.Value}`})
        // console.log("name : " + this.state.name);
        // console.log("description: " + this.state.description);
    
        console.log(e.target.value);
        console.log(`http://127.0.0.1:8000/api/applicants/${e.target.value}`);

       const data=this.getData(`${e.target.value}`);
       
        var promise = Promise.resolve(data);
         promise.then(function(val) { 
            console.log(val); 
            let url="";
            console.log(val.is_accepted);
            if(val.is_accepted){
                url =`http://127.0.0.1:8000/api/applicants/${val.id}/reject`;
                console.log(url);
            }else{
                url =`http://127.0.0.1:8000/api/applicants/${val.id}/accept`;
                console.log(url);}
            axios.put(url)
            .then(
                res=>{console.log(res)},
                );
            }); 
            this.setState({id:  this.props.match.params.workshop});
    
    }
    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                <div className="container" style={{marginTop: "5px"}} >
                    <div> <img src="img/food10.jpg" alt=""/>
                    <h3 style={{textAlign: "center" , color: "#bf360c"}}> 
                     المتقدمين الى ورشه الطبخ</h3><hr/>
                    </div>{/* <div className="row" > */}
                    <Table responsive>
                        <thead>
                            <tr>
                            <th style={{color: "#bf360c"}} >رقم</th>
                            <th style={{color: "#bf360c"}} >اسم المتقدم</th>
                            <th style={{color: "#bf360c" }} >صورة المتقدم</th>
                            <th style={{color: "#bf360c"}} >ايميل المتقدم</th>
                            <th style={{color: "#bf360c"}} >رقم الهاتف المتقدم</th>
                            <th style={{color: "#bf360c"}} >تأكيد/الغاء</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshopApplicants.map((workshopApplicant, i) => (   
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{workshopApplicant.user_name.name}</td>
                                    <td>
                                        <img src={`http://localhost:8000/uploads/user/${workshopApplicant.user_name.image}`} alt="" width="200" height="120"/>
                                    </td>
                                    <td>{workshopApplicant.user_name.email}</td>
                                    <td> </td>
                                    <td>
                                    { workshopApplicant.is_accepted ?     
                                        <button className="btn btn-outline-success btn-sm" onClick={this.handleSubmit} value={workshopApplicant.id}> <i class="far fa-check-square"></i> Accept</button>   
                                        : 
                                        <button className="btn btn-outline-warning btn-sm" value={workshopApplicant.id} onClick={this.handleSubmit} >   
                                            <i class="fas fa-user-slash" ></i>Reject </button>                                   
                                        }
                                    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {/* </div> */}
                </div>
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
export default workshopsApplicants;