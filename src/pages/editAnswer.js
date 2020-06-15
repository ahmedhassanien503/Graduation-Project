import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import Cookies from 'universal-cookie';

class editAnswer extends Component {
    constructor(){
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state={
        answer:"", 

        }
    }
        
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/answers/${this.props.match.params.answer}`)
       .then(
        res=>{this.setState({ answer: res.data.data})},
           );
    }

      handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
      }

      handleSubmit = event =>{
        event.preventDefault();
        const url = `http://127.0.0.1:8000/api/answers/update/${this.props.match.params.answer}`;
        const answer=  this.state.answer ;
        const chef_id= this.is_auth.id;
        const formData = new FormData(); 
        formData.append('_method','PUT'); 
        formData.append('answer',answer); 
        formData.append('chef_id',chef_id); 


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
                 this.props.history.push('/questions')
          
              });

      }
     


render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container">
                        <br/>
                 

{ this.is_auth && this.is_auth.is_chef?
<div className="leave-comment-area section_padding_50 clearfix container">
    <div className="comment-form">
        <h4 className="mb-30"style={{ textAlign: "center"}}>عدل اجابتك</h4>

        <form onSubmit={this.handleSubmit}>
           
            <div className="form-group">
                <textarea className="form-control" name="answer" cols="30" rows="10" placeholder={this.state.answer.answer} onChange={this.handleChange} />
            </div>
                        <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}>
            <button type="submit" className="btn question-btn" > <i className="far fa-edit"></i> تعديل الاجابة</button>
            </div>
        </form>
    </div>
</div>
  :"" }
<SocialSection />
</div>
                    
                    </div>
   
  );
}
}
export default editAnswer;