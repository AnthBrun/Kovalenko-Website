import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Navbar extends Component {
    state = { 
        isCollapsed: true
     } 

     handleLinkClick = () => {
        this.setState({isCollapsed: true});
     }

    render() { 
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => this.setState({ isCollapsed: true})}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <AnchorLink className="nav-link" href="/#leistungen">Leistungen</AnchorLink>
                            <AnchorLink className="nav-link" href="/#kontakt">Kontakt</AnchorLink>
                            <AnchorLink className="nav-link" href="/#uebermich">Über mich</AnchorLink>
                            <a className="nav-link" href="/gallery">Gallerie</a>
                            <a className="nav-link" href="/impressum">Impressum</a>
                        </div>
                    </div>
                    <div className="navbar-brand">
                        <img src="logo_big.jpg" alt="logo" />
                        <p><a href="tel:015906226250">+49 159 06226250</a></p>
                    </div>
                 </div>
                </nav>;
        };
    }
 
export default Navbar;