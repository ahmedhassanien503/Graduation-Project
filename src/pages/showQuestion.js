import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import Answers from './Answers.js';
import addAnswer from './addAnswer.js';


class showQuestion extends Component {
    constructor(){
        super();
        this.state={
            question:{
                "question":"loading...",
                "user_info":"loading ...",
            },
       
        answer:"", 
        }
    }
        
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/questions/${this.props.match.params.question}`)
       .then(
        res=>{this.setState({ question: res.data.data})},
           );
    }

    onDelete(id)
    {
        axios.delete(`http://127.0.0.1:8000/api/questions/delete/${this.props.match.params.question}`)
        .then(response=>{
            // console.log("deleted");
            this.props.history.push('/questions');

        }

        );
    }


      handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
      }
      onAnswer = event =>{
        event.preventDefault();
        console.log("answer : " + this.state.answer);
        const url =`http://127.0.0.1:8000/api/answers/${this.props.match.params.question}`;
        const answer=  this.state.answer ;

        const formData = new FormData(); 
        formData.append('answer',answer); 

          axios.post(url, formData)
          .then(
              res=>{  this.props.history.push('/questions')},

          );
      }


render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container">
                        <br/>
                    

                        <div className="card border-secondary mb-3">
    <div className="card-header" style={{ color:"#e07b39"}}>  <img src={`http://localhost:8000/uploads/user/${this.state.question.user_info.image}`} alt="" width="60" height="60" />  بواسطة: {this.state.question.user_info.name}</div>
  <div className="card-body text-warning">
    <h6 className="card-title">{this.state.question.created_at}</h6>
    <p className="card-text">{this.state.question.question}</p>
  </div>
</div>
        <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
            }}>
    <Link to={`/editquestion/${this.state.question.id}`}> <button type="button" className="btn btn-outline-dark" style={{margin:"10px"}}> <i className="far fa-edit"></i>  تعديل السؤال </button></Link>
    <button type="submit" className="btn contact-btn" onClick={this.onDelete.bind(this,this.state.question.id)}><i className="far fa-trash-alt"></i> مسح السؤال </button>
<Link to={`/questions/answers/${this.state.question.id}`}> <button type="button" className="btn btn-outline-dark" style={{margin:"10px"}}> <i className="far fa-comments"></i>  الاجابات  </button></Link>
</div>
                
{/* <Answers/> */}


<div className="leave-comment-area section_padding_50 clearfix container">
    <div className="comment-form">
        <h4 className="mb-30"style={{ textAlign: "center"}}>اضف اجابتك</h4>

        <form onSubmit={this.onAnswer}>
           
            <div className="form-group">
                <textarea className="form-control" name="answer" cols="30" rows="10" placeholder="الاجابة" onChange={this.handleChange} rows="5" />
            </div>
                        <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}>
            <button type="submit" className="btn contact-btn" > <i className="fas fa-paper-plane"></i> ارسل اجابتك</button>
            </div>
        </form>
    </div>
</div>
<SocialSection />
</div>
                    
                    </div>
   
  );
}
}
export default showQuestion;