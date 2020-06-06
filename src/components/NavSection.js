import React , {Component , useState} from 'react';
//stylesheet;
import  '../../src/assets/css/headerlinks.css';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

function NavSection() {
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home"> <img src="img/chefs.svg" alt=""  width="40" height="50"/> Ratatouille</Navbar.Brand>

                <Nav className="ml-auto">
                    <NavDropdown title="المزيد" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">
                            <Nav.Link  href="#home"> التصنيفات
                                <i class="fas fa-hamburger" style={{width: "25px"} ,{color:'#e07b39'}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">
                            <Nav.Link  href="/workshops">
                                <Link to={"/workshops"}> ورش الطبخ </Link>  
                                <i class="fas fa-users" style={{width: "15px"} ,{color:'#e07b39'}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link  href="#home"> اسأل الشيف
                                <i class="fas fa-comment" style={{width: "15px"} ,{color:'#e07b39'}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link  href="#home"> للتواصل معنا 
                            <i className="fas fa-blender-phone" style={{width: "15px"} ,{color:'#e07b39'}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link  href="#home"> من نحن؟
                    <i class="far fa-address-card" style={{width: "15px"} ,{color:'#e07b39'}}></i></Nav.Link>
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
                    <Nav.Link  href="/">
                        <Link to={"/"}>  <span className="sr-only">(current)</span>الرئيسية  </Link> 
                        <i class="fa fa-fw fa-home" style={{width: "25px"},{color:'#e07b39'}}></i></Nav.Link>
                    <Nav.Link href="#home"> تسجيل الدخول/الاشتراك<i class="fa fa-fw fa-user" style={{width: "25px"},{color:'#e07b39'}}></i></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
  }
  

export default NavSection;
  

