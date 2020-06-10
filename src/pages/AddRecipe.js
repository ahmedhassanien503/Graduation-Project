import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

import ReactDOM from 'react-dom';

import axios from 'axios';
// import NavbarSection from '../components/NavbarSection.js';
// import HeaderSection from '../components/HeaderSection.js';
// import FooterSection from '../components/FooterSection.js';
// import SocialSection from '../components/SocialSection.js';

class AddRecipe extends Component {

  constructor(){
    super();
      this.state={
          recipes:[],
          created_at: '',
          updated_at: '',
          RecipeName:'',
          details:'',
        //   recipe_image:'',
          Serving:'',
          TakenTime:'',
          user_id:'',
      };
      
console.log("Hello therer")
   //   this.handleChange=this.handleChange.bind(this);
    // this.handleChangeCreate=this.handleChangeCreate.bind(this);
    // this.handleChangeRecipe=this.handleChangeRecipe.bind(this);
    // this.handleChangeDetails=this.handleChangeDetails.bind(this);
    // this.handleChangeServing=this.handleChangeServing.bind(this);
    // this.handleChangeTime=this.handleChangeTime.bind(this);
    // this.handleChangeUser=this.handleChangeUser.bind(this);
      this.submit=this.submit.bind(this);
  }

//   onChangeValue(e){
//       console.log (e.target.value);
//       this.setState({
//         created_at:e.target.value,
//         RecipeName: e.target.value,
//         details: e.target.value,
//         // recipe_image: e.target.value,
//         Serving: e.target.value,
//         TakenTime:e.target.value,
//         user_id:e.target.value,
//       })
//   }


 handleChange = ({ target }) => {
   this.setState({ ...this.state, [target.name]: target.value });
    }; 

// handleChangeCreate(e){
//     console.log(e.target.value);
//     this.setState({
//         created_at:e.target.value,
//     })
// }

// handleChangeRecipe(e){
//     console.log(e.target.value);
//     this.setState({
//         RecipeName:e.target.value,
//     })
// }

// handleChangeDetails(e){
//     console.log(e.target.value);
//     this.setState({
//         details:e.target.value,
//     })
// }
// handleChangeServing(e){
//     console.log(e.target.value);
//     this.setState({
//         Serving:e.target.value,
//     })
// }
// handleChangeTime(e){
//     console.log(e.target.value);
//     this.setState({
//         TakenTime:e.target.value,
//     })
// }

// handleChangeUser(e){
//     console.log(e.target.value);
//     this.setState({
//         user_id:e.target.value,
//     })
// }

  onSubmitButton = (e)=>{
      e.prevantDefalt();

      console.log('mmmmmmmm');

    
    };


    submit (event) {
        event.prevantDefalt();
        console.log('mmmmmm');
        console.log('zzzzzzzzzzzzzzzzzzzzz');
    }

  
    

 
    render(){
    return(
  
        <div className="AddRecipe">
          
                                    <form onSubmit={this.submit}>
                                    <label>
                                        <input type="text" name="created_at"  value={this.state.created_at} onChange={this.handleChange} />
                                        <input type="text" name="RecipeName" className="form-control" value={this.state.RecipeName} onChange={this.handleChange} />
                                        <textarea  name="details" value={this.state.details} onChange={this.handleChange}></textarea>

                                        <input type="text" name="Serving" className="form-control" value={this.state.Serving} onChange={this.handleChange} />
                                        <input type="text" name="TakenTime" className="form-control" value={this.state.TakenTime} onChange={this.handleChange} />
                                        <input type="text" name="user_id" className="form-control" value={this.state.user_id} onChange={this.handleChange} />

                                    </label>
                                    <input type="submit" value="Submit" />
                                    </form>

                           

        </div>
   
  );
}
}
export default AddRecipe;