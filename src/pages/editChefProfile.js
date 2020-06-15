import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import FooterSection from '../components/FooterSection.js';

class Chef extends Component{
    constructor() {
        super();
        this.state = {
            name:"",
            work_place:"",
            image:"",
         };
      }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
      handleImage = event => {
        this.setState({ [event.target.name]: event.target.files[0] });
      }
    //   handleSubmit = event => {
    //     event.preventDefault();
    
    //     const chef = {
    //         chef: this.state.chef
    //     };
    //     axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => { 
    //         console.log(response);
    //         axios.put(`http://127.0.0.1:8000/api/chef/edit/${this.props.match.params.chef}`, { chef })
    //        .then(res => {
    //         console.log(res);
    //         console.log(res.data.data);
    //         })
    //     })
    // }

    handleSubmit = event =>{
       
        event.preventDefault();
        const url =`http://127.0.0.1:8000/api/chef/edit/${this.props.match.params.chef}`;
        const name= this.state.name ;
        const work_place= this.state.work_place ;
        const image= this.state.image;
        const formData = new FormData(); 
        formData.append('name',name); 
        formData.append('work_place',work_place);  
        formData.append('image',image);
        console.log(formData.get('name'));
        console.log(formData.get('image')); 
        console.log(formData.get('work_place'));
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
        { console.log('Success:', response); });
    }
    
    
    render(){
        
   return(
        <div>
            <NavbarSection/>
            <div className="container" style={{marginTop:"10px"}} id="right-align">
                <div className="row">
                <div className="col-lg-10">
                <form onSubmit={this.handleSubmit}>
                    <h3 id="right-align">تعديل</h3>
                    <div className="form-group" id="right-align">
                        <label>الاسم</label>
                        <input 
                        name="name"
                        type="text" 
                        className="form-control" 
                        placeholder="تعديل الاسم"
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group" id="right-align">
                        <label>مكان العمل</label>
                        <input 
                        name="work_place"
                        type="text" 
                        className="form-control" 
                        placeholder="تعديل مكان العمل"
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group" id="right-align">
                        <label>الصورة</label>
                        <input 
                        name="image"
                        type="file" 
                        // className="form-control" 
                        placeholder="تعديل مكان العمل"
                        onChange={this.handleImage} />
                    </div>
                    <button className="edit-btn" type="submit" >تعديل</button>
                </form>
                </div>
                </div>
            </div>
            <FooterSection/>
            
        </div>
   );}
}
export default Chef;