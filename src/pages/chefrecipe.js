import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class chefrecipe extends Component {
    constructor()
    {
        super();
        this.state={
            // recipe:[],
            comments : [],
            content:"",
            recipe:null,
            count:0
        }
    }
    
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/recipes/${this.props.match.params.recipe}`)
       .then(
           res=>{ this.setState({recipe: res.data.data});console.log('cheffff')
           return  axios.get(`http://127.0.0.1:8000/api/recipes/${this.props.match.params.recipe}/comments`);
           
        })
           .then(res=>{ 
                console.log(res.data)
                this.setState({
                   comments: res.data.data,
                   count:res.data.data.length
                });
                console.log(res.data.data.length)
            }) 
             
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }
      
    handleSubmit = event =>{
    event.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/recipes/${this.props.match.params.recipe}/comments`,{
        'content':this.state.content,
        'user_id':4,
        'recipe_id': parseInt(this.props.match.params.recipe) 
    }).then(
            res=>{ console.log(res)},
            
        );
    }
    handleClick = commentId => {
        // const requestOptions = {
        //   method: 'DELETE'
        // };
        fetch(`http://127.0.0.1:8000/api/comments/${commentId}`,  {method: 'DELETE'})
            .then((response) => {
                console.log(commentId);
                console.log(response);
                // return response.json();
            }) 
            // .then((result) => {
            //     console.log('Success:', response)
            // });
        }
    render(){
        if(this.state.recipe== null){

          return  <p>loadin...</p>
        }
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                             

{/* {this.state.recipe.user.name} */}

<section className="single_blog_area section_padding_80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="row no-gutters">
                        
                        <div className="col-10 col-sm-11">
                            <div className="single-post">
                     
                                <div className="post-thumb">
                            <img src={`http://localhost:8000/uploads/recipes/${this.state.recipe.recipe_image}`} alt="" width="450" height="400"/> 
                                </div>
                           
                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">
                                          
                                            <div className="post-author">
                                               <a href="#">{this.state.recipe.user.name}</a>
                                            </div>
                                      
                                            <div className="post-date">
                                              <a href="#">{this.state.recipe.created_at}</a>
                                              {/* <a href="#">{this.state.recipe.user.name}</a> */}

                                            </div>
                                        </div>
                                    
                                      
                                    </div>
                                    
                        <h2 className="post-headline" >{this.state.recipe.RecipeName}</h2>
                                    
                                     <p>{this.state.recipe.details}</p>
                                     <p>{this.state.recipe.user.name}</p>


                                    <blockquote className="yummy-blockquote mt-30 mb-30">
                                       
                                    </blockquote>

                                   
                                    <img className="br-30 mb-15" src="img/blog-img/14.jpg" alt=""/>
                                </div>
                            </div>

                          

                        
                            <div className="related-post-area section_padding_50">
                                <h4 className="mb-30">وصفات اخرى</h4>

                                <div className="related-post-slider owl-carousel">
                            
                                    <div className="single-post">
                        
                                        <div className="post-thumb">
                                            <img src="img/blog-img/15.jpg" alt=""/>
                                        </div>
                                 
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                               
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                       
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </a>
                                        </div>
                                    </div>
                              
                                    <div className="single-post">
                                    
                                        <div className="post-thumb">
                                            <img src="img/blog-img/5.jpg" alt=""/>
                                        </div>
                                
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div cclassName="post-author-date-area d-flex">
                                         
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                       
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div className="single-post">
                               
                                        <div className="post-thumb">
                                            <img src="img/blog-img/16.jpg" alt=""/>
                                        </div>
                                  
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                            
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                            
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </a>
                                        </div>
                                    </div>
                            
                                    <div className="single-post">
                              
                                        <div className="post-thumb">
                                            <img src="img/blog-img/5.jpg" alt=""/>
                                        </div>
                               
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                              
                                                    <div className="post-author">
                                                        <a href="#">By Marian</a>
                                                    </div>
                                             
                                                    <div className="post-date">
                                                        <a href="#">May 19, 2017</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                  
                            <div className="comment_area section_padding_50 clearfix">
                                <h4 className="mb-30" id="right-align">{this.state.count} تعليقات</h4>
                                {this.state.comments.map(comment=>{
                                    return(
                                        <ol>
                                    
                                            <li className="single_comment_area" id="right-align">
                                                <div className="comment-wrapper d-flex">
                                            
                                            
                                                    <div className="comment-content">
                                                        <span className="comment-date text-muted"></span>
                                                        <h5 id="right-align">{comment.user.name}</h5>
                                                        <p id="right-align">{comment.content}</p>
                                                        <Link to={`/comment/${comment.id}`}> <a className="active">تعديل</a></Link>
                                                        <button className="delete-btn" onClick={() => { this.handleClick(comment.id) }}>حذف</button>
                                                    </div>

                                                    <div className="comment-author" id="right-align">
                                                        <img className="img-fluid user-img" src={`http://127.0.0.1:8000/uploads/${comment.user.image}`} alt=""/>
                                                    </div>
                                                </div>
                                                {/* <ol className="children">
                                                    <li className="single_comment_area">
                                                        <div className="comment-wrapper d-flex">
                                                    
                                                            <div className="comment-author">
                                                                <img src="img/blog-img/18.jpg" alt=""/>
                                                            </div>
                                                
                                                            <div className="comment-content">
                                                                <span className="comment-date text-muted">27 Aug 2018</span>
                                                                <h5>Brandon Kelley</h5>
                                                                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                                <a href="#">Like</a>
                                                                <a className="active" href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol> */}
                                            </li>
                                            {/* <li className="single_comment_area">
                                                <div className="comment-wrapper d-flex">
                                                
                                                    <div className="comment-author">
                                                        <img src="img/blog-img/19.jpg" alt=""/>
                                                    </div>
                                            
                                                    <div className="comment-content">
                                                        <span className="comment-date text-muted">27 Aug 2018</span>
                                                        <h5>Brandon Kelley</h5>
                                                        <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                        <a href="#">Like</a>
                                                        <a className="active" href="#">Reply</a>
                                                    </div>
                                                </div>
                                            </li> */}
                                        </ol>
                                    )}
                                )}
                            </div>

             
                            <div className="leave-comment-area section_padding_50 clearfix">
                                <div className="comment-form"  id="right-align">
                                {/* <i class="far fa-comment-o"></i> */}
                                    <h4 className="mb-30" id="right-align">اترك تعليقا</h4>

                            
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group" id="right-align">
                                            <input type="text" name="content" className="form-control" onChange={this.handleChange} id="contact-name" placeholder="أضف تعليقك"/>
                                        </div>
                                        
                                        <button type="submit" className="btn contact-btn right-align" id="right-align">أضف تعليقا</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="blog-sidebar mt-5 mt-lg-0">
               
                        <div className="single-widget-area about-me-widget text-center">
                            <div className="widget-title">
                                <h6>معلومات عن الشيف</h6>
                            </div>
                            <div className="about-me-widget-thumb">
                            <img src={`http://localhost:8000/uploads/chef/${this.state.recipe.user.image}`} alt="" width="450" height="400"/> 
                            <img src={`http://localhost:8000/uploads/user/${this.state.recipe.user.image}`} alt="" width="450" height="400"/> 

                            </div>
                            <h4 className="font-shadow-into-light">Shopia Bernard</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        </div>

                 
                        <div className="single-widget-area subscribe_widget text-center">
                            <div className="widget-title">
                                <h6>للاشتراك والمتابعة</h6>
                            </div>
                            <div className="subscribe-link">
                              
                            <div className="single-icon">
                        <a href="https://www.instagram.com/ratatouile6/"><i className="fab fa-instagram" style={{width: "30px"}} aria-hidden="true"></i><span>Instagram</span></a>
                    </div>                              
                            </div>
                        </div>

                    
                        <div className="single-widget-area popular-post-widget">
                            <div className="widget-title text-center">
                                <h6>وصفات اخرى</h6>
                            </div>
                         
                      


                
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



                          
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copy_right_text text-center">
                                <p>@2020, Made with <i className="fas fa-heart"></i> by <a href="#" > Ratatouille Team </a> for food lover's.</p>
                            </div>
                        </div>
                    </div>
                </div>
            <SocialSection />
        </div>
   
  );
}
}
export default chefrecipe;