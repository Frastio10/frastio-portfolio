import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";

function MainNav (){

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Link to="/" className="navbar-brand">Frastio Agustian</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto"></div>
                    <Nav>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                        <Link to="/works" className="nav-link">
                            Works
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav