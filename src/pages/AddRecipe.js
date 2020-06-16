import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import User from './User';


class AddRecipe extends Component {
    constructor(){
        super();
        this.state={
            created_at:"",  
            RecipeName:"",
            title:"",
            details:"",
            recipe_image:"",
            Serving:"",
            TakenTime:"",
            user_id: User.id,
          }
        console.log(this.state);

        }
        handleChange = event =>{
          this.setState({ [event.target.name]:event.target.value })
        }
        handleImage = event =>{
            this.setState({ [event.target.name]:event.target.files[0] })
          }
        handleSubmit = event =>{
          event.preventDefault();
          console.log("name : " + this.state.Serving);
          console.log("description: " + this.state.user_id);
            const url ="http://127.0.0.1:8000/api/recipes";
            const created_at=  this.state.created_at;
            const RecipeName=  this.state.RecipeName;
            const title= this.state.title;
            const details= this.state.details;
            const recipe_image= this.state.recipe_image;
            const Serving= this.state.Serving;
            const TakenTime= this.state.TakenTime;
            const user_id= this.state.user_id;
            const formData = new FormData(); 
          formData.append('created_at',created_at); 
          formData.append('RecipeName',RecipeName); 
          formData.append('title',title); 
          formData.append('details',details); 
          formData.append('recipe_image',recipe_image); 
          formData.append('Serving',Serving); 
          formData.append('TakenTime',TakenTime); 
          formData.append('user_id',user_id);
     

        axios.post(url, formData)
            .then(
                res=>{  this.props.history.push('/recipes');
        })
    }

render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                    <div className="container" style={{marginTop:"10px"}}>
                    <div className="contact-form-area">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="contact-form-sidebar " data-wow-delay="0.3s" >
                        <p> . </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 item">
                        <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s">
                            <h2 style={{color:"#FF8C00",textAlign:"right"}}> وصفات جديدة</h2>
                            
                        <form onSubmit={this.handleSubmit}>
                
                                <div className="form-group"style={{textAlign:"right"}}>
                                    <label >تاريخ الانشاء</label>
                        <input style={{textAlign:"right"}}name="created_at" type="text" className="form-control" onChange={this.handleChange} />
                                </div>

                                <div className="form-group"style={{textAlign:"right"}}>
                                    <label>اسم الوصفة</label>
                     <input style={{textAlign:"right"}} name="RecipeName" type="text"  className="form-control"  placeholder="اسم الوجبه"onChange={this.handleChange} /></div>

                     <div className="form-group"style={{textAlign:"right"}}>
                                    <label>العنوان</label>
                     <input style={{textAlign:"right"}} name="title" type="text"  className="form-control"  placeholder="المختصر المفيد"onChange={this.handleChange} /></div>

                                <div className="form-group"style={{textAlign:"right"}}>
                                    <label>التفاصيل</label>
                     <textarea style={{textAlign:"right"}}name="details"  className="form-control"  placeholder="المعاير" onChange={this.handleChange} />
                                </div>
                                <div className="form-group"style={{textAlign:"right"}}>
                                    <label>صورة الاكلة </label>
                    <input style={{textAlign:"right"}} name="recipe_image" type="file"  className="form-control"   onChange={this.handleImage} />
                                </div>
                                <div className="form-group"style={{textAlign:"right"}}>
                                    <label>هذه الوجبة تكفى لعدد</label>
                  <input style={{textAlign:"right"}} name="Serving" type="number" className="form-control" placeholder="عدد الاشخاص" onChange={this.handleChange} />
                                </div>
                                <div className="form-group"style={{textAlign:"right"}}>
                                    <label>الوقت المستهلك لاعدادها</label>
                  <input style={{textAlign:"right"}}name="TakenTime" type="number"className="form-control" placeholder="ما هو الوقت اللزم لاعداد هذه الوصفة؟"onChange={this.handleChange} />
                                </div>
                        
                                <button type="submit" className="btn contact-btn">اضف الى وصفاتك</button>
                        </form>
                    </div>
                </div>
              </div>
          </div>
       </div>
            <SocialSection />
        </div>
   
  );
}
}
export default AddRecipe;