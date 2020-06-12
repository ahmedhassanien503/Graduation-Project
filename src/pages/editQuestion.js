import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import SocialSection from '../components/SocialSection.js';

class editQuestion extends Component {
    constructor(){
        super();
        this.state={
            
                question:{"question":"loading",
                        //   "user_info":{"name":"loading"},
                        },
                        // name:"",  
                        question:"",
            }
                
            }
        
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        componentDidMount()
        {
            axios.get(`http://127.0.0.1:8000/api/questions/${this.props.match.params.question}`)
            .then(
                res=>{this.setState({ question: res.data.data})},
            )
        }
        handleSubmit = event =>{
          event.preventDefault();
          const url = `http://127.0.0.1:8000/api/questions/update/${this.props.match.params.question}`;
          const question=  this.state.question ;
          const formData = new FormData(); 
          formData.append('_method','PUT'); 
          formData.append('question',question); 


            fetch(url, { method: 'POST', // or 'PUT’
            headers:{ 
                'Accept': 'application/json'
              },
            body:formData, // data can be `string` or {object}!
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>
                {  console.log('Success:', response); 
                   this.props.history.push(`/questions/${this.props.match.params.question}`)
            
                });

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
                                        placeholder={this.state.question.question}
                                        onChange={this.handleChange} 
                                        rows="5"/>
                                        
            
                                </div>
                                <br/>
                                <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                <button type="submit" className="btn btn-outline-dark"><i className="far fa-edit"></i>  تعديل السؤال</button>
</div>
                        </form>
                    </div>
            <SocialSection />
        </div>
   
  );
}
}
export default editQuestion;