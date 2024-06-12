import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import logo from '../assets/img/Areeb1.png'
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [ActiveLink, setActiveLink] = useState('home')
    const [scrolled, setSCrolled] = useState(false)
   
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setSCrolled(true)
            } else {
                setSCrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (link) => {
        setActiveLink(link)
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo-navbar'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={ActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={ActiveLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={ActiveLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text"> 
                        <div className="social-icon">
                            <a href="#"><img src={navicon1} alt='apt-link'></img></a>
                            <a href="#"><img src={navicon2} alt='apt-link2'></img></a>
                            <a href="#"><img src={navicon3} alt='apt-link3'></img></a>
                        </div>
                        <button className="contactme" onClick={() => console.log("clicked!")}><span>Contact Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
