import React  ,{Component }from 'react';
import { useHistory } from "react-router-dom";
class editComment extends Component{
    constructor() {
        super();
        this.state = {
            content:"",
         };
      }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
      handleSubmit = event =>{
       
        event.preventDefault();
        const url =`http://127.0.0.1:8000/api/comments/${this.props.match.params.comment}`;
        const formData = new FormData(); 
        formData.append('content',this.state.content); 
        console.log(formData.get('content'));
        formData.append('_method','PUT'); 
        fetch(url, { method: 'POST', // or 'PUT’
        headers:{ 
        // 'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body:formData, // data can be `string` or {object}!
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response =>
        { console.log('Success:', response); 
    
    });
    }
    
    
    render(){
        
   return(
    

<div class="card">
    <div className="container">
        <div className="row">
            <div class="card-header col-lg-8" id="right-align">   
                <label >تعديل التعليق</label>
            </div>
        </div>
        <div className="row">
            <div class="card-body col-lg-8" id="right-align">
                <form onSubmit={this.handleSubmit}>
                    <input name="content" type="text" className="form-control" placeholder="تعديل التعليق" onChange={this.handleChange}></input>
                    <button type="submit" className="btn contact-btn"  >تعديل</button>
                </form>
            </div>
        </div>
  </div>
</div>
   )}
}

export default editComment;