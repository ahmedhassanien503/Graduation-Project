import React , {Component , useState} from 'react';
//stylesheet;
import  '../../src/assets/css/headerlinks.css';
import Carousel from 'react-bootstrap/Carousel';

function NavHeaderSection() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
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
            </Carousel>
        </div>
    );
  }
  

export default NavHeaderSection;
  

