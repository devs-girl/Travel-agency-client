import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../bd-logo.png';
import './Header.css'
import useAuth from '../../hooks/useAuth';
 


const Header = () => {
   const {user, logOut} = useAuth();
    return (
        <Navbar className="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand  >
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="img-fluid logo"
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">
                            <button className="btn w-100 txt-color fw-600">Home</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/about">
                            <button className="btn w-100">About Us</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/contact">
                            <button className="btn w-100 txt-color">Contact Us</button>
                        </NavLink>

                

                     {user?.email ?
                     <div className="three-btn">
                     <NavLink className="nav-link" to="/myOrder">
                     <button className="btn w-100">My Order</button>
                 </NavLink>

                 <NavLink className="nav-link" to="/manageAll">
                     <button className="btn w-100">Manage All Orders</button>
                 </NavLink>

                 <NavLink className="nav-link" to="/addEvents">
                     <button className="btn w-100">Add Events</button>
                 </NavLink>
                       <button  onClick={logOut} className="btn-logout text-light py-2 my-2">Logout</button>
                       </div>:
                       <NavLink className="nav-link" to="/login">
                       <button to="/login"  className=" login-btn px-4 w-100 fw-bold">Login</button>
                   </NavLink>}
                            <span className="ms-3 mt-3">
                            {user?.displayName}
                            </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;