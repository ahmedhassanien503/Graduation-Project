import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

import axios from 'axios';

class Answers extends Component {

    constructor()
    {
        super();
        this.state={
            answers:[],
        }
    }
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/questions/answers/${this.props.match.params.id}`)
       .then(
           res=>{this.setState({ answers: res.data.data})},
           );

    }


    // onDelete(id)
    // {
    //     axios.delete(`http://127.0.0.1:8000/api/answers/delete/${this.props.match.params.answer}`)
    //     .then(response=>{
    //         // console.log("deleted");
    //         this.props.history.push('/questions');
    //         this.props.onDelete(id);

    //     }

    //     );
    // }

    render(){
        return(
<div>
<NavbarSection/>
            <HeaderSection/>

<div className="comment_area section_padding_50 clearfix container">
    <h4 className="mb-30"style={{ textAlign: "center", color:"#e07b39"}}>الاجابات</h4>

    {this.state.answers.map(answer=>{
            return(
    <ol>
     
        <li className="single_comment_area" key={answer.id}>
            <div className="comment-wrapper d-flex" >
          
                <div className="comment-author">
                    <img src={`http://127.0.0.1:8000/uploads/${answer.chef_info.image}`} alt="" />
                </div>
           
                <div className="comment-content">
                    <span className="comment-date text-muted">{answer.created_at}</span>
                       <h6>بواسطة : {answer.chef_info.name}</h6>
            <p>{answer.answer}</p>
                    {/* <a href="#">Like</a> */}
                    <button type="submit" className="btn btn-outline-danger btn-sm" ><i className="far fa-trash-alt"></i> مسح الاجابة </button>
                </div>
            </div>
        </li>
    </ol>

) } )}
    </div>

</div>
);
}
}

export default Answers;