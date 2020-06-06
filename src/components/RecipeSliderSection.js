import React , {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';

class RecipeSliderSection extends Component {

    constructor()
    {
        super();
        this.state={
        recipes:[]
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/recipes')
       .then(result=>{this.setState({recipes:result.data.data})});
    
    }

  render(){
   
    return (


 <div className="instargram_area section_padding_100_0 clearfix" id="portfolio"> 
{/* {this.state.recipes.map(recipe=>{
            return( */}

  <OwlCarousel
    loop
    margin={3}
    nav
    autoplay
    autoplayTimeout={1500}
    autoplayHoverPause={true}
    
  >   
  
  <div className="instagram_gallery_item">
          
          <img src="img/instagram-img/1.jpg" alt="" />
       
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                          <p>allaho akbar</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  
      <div className="instagram_gallery_item">
   
          <img src="img/instagram-img/2.jpg" alt="" />
   
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

 
      <div className="instagram_gallery_item">
    
          <img src="img/instagram-img/3.jpg" alt="" />
       
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

     
      <div className="instagram_gallery_item">
     
          <img src="img/instagram-img/4.jpg" alt="" />
        
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="instagram_gallery_item">
       
          <img src="img/instagram-img/5.jpg" alt="" />
        
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="instagram_gallery_item">
       
          <img src="img/instagram-img/6.jpg" alt="" />
        
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div className="instagram_gallery_item">
         
          <img src="img/instagram-img/1.jpg" alt="" />
      
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  
      <div className="instagram_gallery_item">
    
          <img src="img/instagram-img/2.jpg" alt="" />
        
          <div className="hover_overlay">
              <div className="yummy-table">
                  <div className="yummy-table-cell">
                      <div className="follow-me text-center">
                          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

        </OwlCarousel>
            {/* ) } )}  */}
        </div>

    );
}
  }



export default RecipeSliderSection;