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
        recipe:[]
        }
    }
    
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/recipes/${this.props.match.params.recipe}`)
       .then(
           res=>{ this.setState({recipe: res.data.data})},
           );
    }

    render(){
    return(
  
        <div>
            <NavbarSection/>
            <HeaderSection/>
                             

{this.state.recipe.user.name}

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
                                               {/* <a href="#">{this.state.recipe.user.name}</a> */}
                                            </div>
                                      
                                            <div className="post-date">
                                              <a href="#">{this.state.recipe.created_at}</a>
                                            </div>
                                        </div>
                                    
                                      
                                    </div>
                                    
                        <h2 className="post-headline" >{this.state.recipe.RecipeName}</h2>
                                    
                                     <p>{this.state.recipe.details}</p>

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
                                <h4 className="mb-30">2 Comments</h4>

                                <ol>
                               
                                    <li className="single_comment_area">
                                        <div className="comment-wrapper d-flex">
                                       
                                            <div className="comment-author">
                                                <img src="img/blog-img/17.jpg" alt=""/>
                                            </div>
                                    
                                            <div className="comment-content">
                                                <span className="comment-date text-muted">27 Aug 2018</span>
                                                <h5>Brandon Kelley</h5>
                                                <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                <a href="#">Like</a>
                                                <a className="active" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <ol className="children">
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
                                        </ol>
                                    </li>
                                    <li className="single_comment_area">
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
                                    </li>
                                </ol>
                            </div>

             
                            <div className="leave-comment-area section_padding_50 clearfix">
                                <div className="comment-form">
                                    <h4 className="mb-30">Leave A Comment</h4>

                            
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="contact-name" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="contact-email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="contact-website" placeholder="Website"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="btn contact-btn">Post Comment</button>
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
                                <img src="img/about-img/1.jpg" alt=""/>
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