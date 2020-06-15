import React , {Component , useState} from 'react';
//stylesheet;
import  '../../src/assets/css/headerlinks.css';
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function NavHeaderSection() {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return (
    

            <OwlCarousel
                className="owl-theme"  
                loop
                items={1}
                nav
                autoplay
                autoplayTimeout={900}
                autoplayHoverPause={true}
            >
        <div className="welcome-single-slide">   
            <img  style ={{ display: "block" , width: "100% ", height: "auto"}} src="/img/carousel/food12.jpeg"  alt="First slide" width="340" height="240" />

        </div>
        <div className="welcome-single-slide">   
            <img style ={{ display: "block" , width: "100% ", height: "auto"}} src="/img/carousel/food4.jpg"  alt="First slide" width="340" height="240" />

        </div>
        <div className="welcome-single-slide">   
            <img  style ={{ display: "block" , width: "100% ", height: "auto"}} src="/img/carousel/food7.jpg"  alt="First slide" width="340" height="240" />

        </div>

        </OwlCarousel>

    );
  }
  

export default NavHeaderSection;
  

        {/* <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/carousel/food1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ratatouile for food lovers</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/carousel/food6.jpg"
                        alt="Second slide"
                    />
            
                    <Carousel.Caption>
                        <h3>Ratatouile for food lovers</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/carousel/food7.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Ratatouile for food lovers</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}