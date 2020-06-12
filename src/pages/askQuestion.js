import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class askQuestion extends Component {
    constructor(){
        super();
        this.state={
            question:"",  
          }
        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleSubmit = event =>{
          event.preventDefault();
          console.log("question : " + this.state.question);
          const url ="http://127.0.0.1:8000/api/questions/submit";
          const question=  this.state.question ;

          const formData = new FormData(); 
          formData.append('question',question); 

            axios.post(url, formData)
            .then(
                res=>{  this.props.history.push(`/questions/${res.data.data.id}`)},

            );
        }

render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container">
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                            <h2 style={{ textAlign: "center", color:"#e07b39"}}>الاسئلة و الاستفسارات </h2>
                        <hr/>
                                <div className="question"style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }} >
                
                                    <textarea 
                                        name="question"
                                        className="form-control" 
                                        placeholder="اضف سؤالك"
                                        onChange={this.handleChange} 
                                        rows="5"/>
                                </div>
                                <br/>
                                <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                          
        <Link to={'/questions'}> <button type="button" className="btn btn-outline-dark" style={{margin:"10px"}}> <i className="fas fa-question"></i>  الاسئلة الشائعة </button></Link>

                                <button type="submit" className="btn btn-outline-dark"> <i className="fas fa-paper-plane"></i> ارسل سؤالك </button>
                                </div>
                        </form>
                    </div>
            <SocialSection />
        </div>
   
  );
}
}
export default askQuestion;