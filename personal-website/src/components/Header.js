import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

class HeaderBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            navbarStyle: {},
            navLinkStyle: {
                fontWeight:"600", 
                color:"rgba(255, 255, 255, 0.8)"
            }
        }
    }

    handleScroll = () => {
        if(window.scrollY === 0){
            this.setState({navbarStyle:{}});            
        } else if (window.scrollY !== 0 && !this.state.navbarStyle.backgroundImage) {
            this.setState({navbarStyle:{backgroundImage:"url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}});
        }
    }

    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render(){ 

        return (
            <div>
                <Navbar bg="lg" expand="lg" variant="dark" fixed="top" style={this.state.navbarStyle}>
                {/*<Navbar.Brand href={'/'} style={{color:"#5AAFBC", marginLeft:"40px"}}>
                <img style={{height:"60px"}} src={process.env.PUBLIC_URL + '/laptop-coding.png'} alt="logo"/>
                </Navbar.Brand>*/}
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
                        <Nav.Link href="/" style={this.state.navLinkStyle}>HOME</Nav.Link>
                        <Nav.Link href="/about" style={this.state.navLinkStyle}>ABOUT</Nav.Link>
                        <Nav.Link href="/blog" style={this.state.navLinkStyle}>BLOG</Nav.Link>
                        <Nav.Link href="/art" style={this.state.navLinkStyle}>ART</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
            
        );
    }
}

export default HeaderBar;
