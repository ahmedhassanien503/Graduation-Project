import React , {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
class RecipeSection extends Component {
 

  render(){
   
    return (
        <div className="RecipeSection container">

<section className="welcome-post-sliders">
<h2> تصنيفاتنا من المأكولات تحتوى على كل ما تشتهيه</h2>
<hr/>

<OwlCarousel
    loop
    margin={10}
    nav
>
     
        <div className="welcome-single-slide">
            
            <img src="img/bg-img/slide-1.jpg" alt=""/>
         
  
            <div className="project_title">
                <div className="post-date-commnents d-flex">
                    <a href="#">May 19, 2017</a>
                    <a href="#">5 Comment</a>
                </div>
                <a href="#">
                    <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                </a>
            </div>
        </div>

      
        <div className="welcome-single-slide">
          
            <img src="img/bg-img/slide-2.jpg" alt=""/>
         
            <div className="project_title">
                <div className="post-date-commnents d-flex">
                    <a href="#">May 19, 2017</a>
                    <a href="#">5 Comment</a>
                </div>
                <a href="#">
                    <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                </a>
            </div>
        </div>

    
        <div className="welcome-single-slide">
          
            <img src="img/bg-img/slide-3.jpg" alt=""/>
        
            <div className="project_title">
                <div className="post-date-commnents d-flex">
                    <a href="#">May 19, 2017</a>
                    <a href="#">5 Comment</a>
                </div>
                <a href="#">
                    <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                </a>
            </div>
        </div>

    
        <div className="welcome-single-slide">
       
            <img src="img/bg-img/slide-4.jpg" alt=""/>
    
            <div className="project_title">
                <div className="post-date-commnents d-flex">
                    <a href="#">May 19, 2017</a>
                    <a href="#">5 Comment</a>
                </div>
                <a href="#">
                    <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                </a>
            </div>
        </div>

   
        <div className="welcome-single-slide">
         
            <img src="img/bg-img/slide-4.jpg" alt=""/>
        
            <div className="project_title">
                <div className="post-date-commnents d-flex">
                    <a href="#">May 19, 2017</a>
                    <a href="#">5 Comment</a>
                </div>
                <a href="#">
                    <h5>“I’ve Come and I’m Gone”: A Tribute to Istanbul’s Street</h5>
                </a>
            </div>
        </div>
        </OwlCarousel>
    </section>

        </div>

);
}
  }


export default RecipeSection;