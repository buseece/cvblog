import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

class HeaderBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            navbarStyle: {}
        }
    }

    handleScroll = () => {
        if(window.scrollY === 0){
            this.setState({navbarStyle:{}});            
        } else if (window.scrollY !== 0 && !this.state.navbarStyle.backgroundColor) {
            this.setState({navbarStyle:{backgroundColor:"#512b58"}});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render(){ 
        let headerLinkStyle = {
            fontWeight:"600", 
            color:"rgba(255, 255, 255, 0.5)"
        }
        return (
            <div>
                <Navbar bg="lg" expand="lg" variant="dark" fixed="top" style={this.state.navbarStyle}>
                <Navbar.Brand href={'/'} style={{color:"#5AAFBC", marginLeft:"40px"}}>
                <img style={{height:"60px"}} src={process.env.PUBLIC_URL + '/laptop-coding.png'} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav>
                        {/*<Link to="/" className="nav-link custom-nav-link" >
                            ABOUT
                        </Link>
                        <Link to="/software" className="nav-link custom-nav-link" >
                            SOFTWARE
                        </Link>
                        <Link to="/art" className="nav-link custom-nav-link" >
                            ART
                        </Link>*/}
                        <Nav.Link href="#about" style={{fontWeight:"600"}}>ABOUT</Nav.Link>
                        <Nav.Link href="#education" style={{fontWeight:"600"}}>,EDUCATION</Nav.Link>
                        <Nav.Link href="#experience" style={{fontWeight:"600"}}>EXPERIENCE</Nav.Link>
                        <Nav.Link href="#more" style={{fontWeight:"600"}}>MORE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
            
        );
    }
}

export default HeaderBar;
