import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import axios from 'axios';


class addAnswer extends Component {

    // constructor()
    // {
    //     super();
    //     this.state={
    //         categories:[]
    //     }
    // }
    render(){
        return(


<div className="leave-comment-area section_padding_50 clearfix container">
    <div className="comment-form">
        <h4 className="mb-30">Leave A Comment</h4>

        <form action="#" method="post">
           
            <div className="form-group">
                <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message" />
            </div>
            <button type="submit" className="btn contact-btn">Post Comment</button>
        </form>
    </div>
</div>

);
}
}

export default addAnswer;