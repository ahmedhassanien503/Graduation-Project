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
                <Navbar.Brand href="#home"> <div> <img src="img/chefs.svg" alt=""  width="40" height="50"/> </div> <div>Ratatouille </div></Navbar.Brand>

                <Nav className="ml-auto">
                    <NavDropdown title="المزيد" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">
                            <Nav.Link  to={"/categories"}>
                            <Link to={"/categories"} style={{color:"grey"}}>  التصنيفات
                                <i className="fas fa-hamburger" style={{width: "25px"} ,{color:'#e07b39'}}></i> </Link> </Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">
                            <Nav.Link  href="/workshops">
                                <Link to={"/workshops"} style={{color:"grey"}}> ورش الطبخ </Link>  
                                <i className="fas fa-users" style={{width: "15px"} ,{color:'#e07b39'}}></i></Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            <Nav.Link to={"/questions"}>
                            <Link to={"/questions"} style={{color:"grey"}}> الاسئلة و الاستفسارات </Link>
                            <i class="fas fa-question" style={{width: "15px"} ,{color:'#e07b39'}}></i></Nav.Link>
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
                            <Link  to={"/recipes"}> وصفات الطهاه</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.2">
                        <Link to={"/userrecipes"}> وصفات الاعضاء</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  href="/">
                        <Link to={"/"} style={{color:"#e07b39"}}>  <span className="sr-only">(current)</span>الرئيسية  </Link> 
                        <i className="fa fa-fw fa-home" style={{width: "25px"},{color:'#e07b39'}}></i>
                        </Nav.Link>
                    <Nav.Link href="/layout"> تسجيل الدخول | الاشتراك<i className="fa fa-fw fa-user" style={{width: "25px"},{color:'#e07b39'}}></i></Nav.Link>
                
                </Nav>
            </Navbar>
        </div>
    );
  }
  

export default NavSection;
  

