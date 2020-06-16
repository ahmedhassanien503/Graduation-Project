import React  ,{Component }from 'react';
import axios from 'axios';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.css";
import "./side.js"
import User from './User';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

class CreateMenuRecipe extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state = {
            name : "",
            description:"",
            price:"",
            image:"",
            chef_id: User.id,
         };
      }
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
      handleImage = event => {
        this.setState({ [event.target.name]: event.target.files[0] });
      }
      handleSubmit = event =>{
       
        event.preventDefault();
        const formData = new FormData();
        const name= this.state.name ;
        const description= this.state.description;
        const price= this.state.price;
        const image= this.state.image;
         console.log(this.state.chef_id);
        formData.append('name',name); 
        formData.append('description',description);  
        formData.append('price',price);
        formData.append('image',image);
        formData.append('chef_id',this.state.chef_id);
        console.log(formData.get('name'));
        console.log(formData.get('description'));
        console.log(formData.get('price'));
        console.log(formData.get('image'));
        formData.append('_method','POST'); 
        
        fetch(`http://127.0.0.1:8000/api/chefs/${this.props.match.params.chef}/menus`, { method: 'POST', // or 'PUT’
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
            this.props.history.push(`/chefs/${this.state.chef_id}`);
          
        });

        
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12" id="right-align">
                            <h4 className="pad-center-title"> أضف اكله جديدة بالمنيو</h4>
                            <form onSubmit={this.handleSubmit} id="right-align">
                                <div className="form-group" id="right-align">
                                    <label>اسم الاكله</label>
                                    <input type="text" name="name" className="form-control" onChange={this.handleChange}  placeholder="أضف اسم الاكله"/>
                                </div>
                                <div className="form-group" id="right-align">
                                    <label>تفصيل الاكله</label>
                                    <input type="text" name="description" className="form-control" onChange={this.handleChange} placeholder="أضف تفصيل الاكله"/>
                                </div>
                                <div className="form-group" id="right-align">
                                    <label>السعر</label>
                                    <input type="text" name="price" className="form-control" onChange={this.handleChange}  placeholder="أضف السعر "/>
                                </div>
                                <div className="form-group" id="right-align">
                                    <label> اضف صورة</label>
                                    <input type="file" name="image" className="form-control" onChange={this.handleImage}   placeholder="أضف صورة الاكله"/>
                                </div>
                                <button type="submit" className="btn contact-btn" id="right-align">أضف الاكله</button>
                            </form>
 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }
export default CreateMenuRecipe;