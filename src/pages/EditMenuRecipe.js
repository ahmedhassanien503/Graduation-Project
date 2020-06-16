import React  ,{Component }from 'react';
import axios from 'axios';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.css";
import "./side.js"
import User from './User';
import Cookies from 'universal-cookie';

class EditMenuRecipe extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state = {
            name : '',
            description:'',
            price:'',
            image:'',
            chef_id: '',
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
        formData.append('name',this.state.name); 
        formData.append('description',this.state.description);  
        formData.append('price',this.state.price);
        formData.append('image',this.state.image);
        console.log(formData.get(this.state.name));
        console.log(formData.get(this.state.description));
        console.log(formData.get(this.state.price));
        console.log(formData.get(this.state.image));
        formData.append('_method','PUT'); 
        fetch(`http://127.0.0.1:8000/api/menus/${this.props.match.params.menu}`, { method: 'POST', // or 'PUT’
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
                            <h4 className="pad-center-title"> تعديل الاكله </h4>
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
                                <button type="submit" className="btn contact-btn" id="right-align">تعديل الاكله</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }
export default EditMenuRecipe;