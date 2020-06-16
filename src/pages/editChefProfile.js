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
            <div className="container" style={{marginTop:"10px"}}>
            <div className="contact-form-area">
                <div className="row">
                    <div className="col-12 col-md-5">
                     
                    </div>
                    <div className="col-12 col-md-7 item">
                        <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s">
                            <h2 className="contact-form-title mb-30"></h2>
                            
                <form onSubmit={this.handleSubmit}>
                <h2 style={{color:"#FF8C00",textAlign:"right"}}> ألان يمكنك تعديل صفحتك الشخصية</h2>
                    <div className="form-group" style={{textAlign:"right"}}>
                        <label>الاسم</label>
                        <input 
                        name="name"
                        type="text" 
                        className="form-control" 
                        placeholder="تعديل الاسم"
                        style={{textAlign:"right"}}
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group" style={{textAlign:"right"}}>
                        <label>مكان العمل</label>
                        <input 
                        name="مكان العمل"
                        type="text" 
                        className="form-control" 
                        placeholder="تعديل مكان العمل"
                        style={{textAlign:"right"}}
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group"                        style={{textAlign:"right"}}
>
                        <label>الصورة الشخصية</label>
                        <input 
                        name="image"
                        type="file" 
                        // className="form-control" 
                        placeholder="تعديل مكان العمل"
                        onChange={this.handleImage} />
                    </div>
                    <button type="submit" className="btn contact-btn">تعديل</button>
                    <button className="edit-btn" type="submit" >تعديل</button>
                </form>
                </div>
                </div>
            </div>
        </div>
        </div>
 
            <FooterSection/>
          
            
        </div>
   );}
}
export default Chef;