import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Startseite</a>
                        <a className="nav-link" href="#leistungen">Leistungen</a>
                        <a className="nav-link" href="#kontakt">Kontakt</a>
                        <a className="nav-link" href="#uebermich">Über mich</a>
                        <a className="nav-link" href="gallery.html">Gallerie</a>
                        <a className="nav-link" href="impressum.html">Impressum</a>
                        </div>
                    </div>
                    <div className="navbar-brand">
                        <img src="logo192.png" alt="logo" />
                        <p style={{color: "brown"}}>+49 176 12345678</p>
                    </div>
                 </div>
                </nav>;
        };
    }
 
export default Navbar;