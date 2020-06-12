import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class showQuestion extends Component {
    constructor(){
        super();
        this.state={
            question:{
                "question":"loading...",
                "user_info":"loading ...",
            }
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
    <button type="submit" className="btn btn-outline-warning" onClick={this.onDelete.bind(this,this.state.question.id)}><i className="far fa-trash-alt"></i> مسح السؤال </button></div>
<SocialSection />
                    </div>
                 

                    </div>
   
  );
}
}
export default showQuestion;