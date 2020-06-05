import React , {Component , useState} from 'react';
//stylesheet;
import  '../../src/assets/css/headerlinks.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavHeaderSection() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home"> <i class="fas fa-seedling"></i>Ratatouile</Navbar.Brand>

                <Nav className="ml-auto">
                    <NavDropdown title="المزيد" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">
                            <Nav.Link  href="#home"> التصنيفات
                                <i class="fas fa-hamburger" style={{width: "25px"}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">
                            <Nav.Link  href="#home"> ورش الطبخ
                                <i class="fas fa-users"></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link  href="#home"> اسأل الشيف
                                <i class="fas fa-comment"></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link  href="#home"> للتواصل معنا 
                            <i className="fas fa-blender-phone" style={{width: "15px"}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link  href="#home"> من نحن؟
                    <i class="far fa-address-card" style={{width: "15px"}}></i></Nav.Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="الوصفات" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">
                            <Nav.Link  href="#home"> وصفات الطهاه</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.2">
                        <Nav.Link  href="#home"> وصفات الاعضاء</Nav.Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  href="#home"> <span className="sr-only">(current)</span>الرئيسية
                        <i class="fa fa-fw fa-home" style={{width: "25px"}}></i></Nav.Link>
                    <Nav.Link href="#home"> تسجيل الدخول/الاشتراك<i class="fa fa-fw fa-user"></i></Nav.Link>
                </Nav>
            </Navbar>

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
  

