import React, { Component } from 'react';

class ShortNavbar extends Component {
    state = {  } 
    render() { 
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/">Startseite</a>
                    <a className="nav-link" href="/gallery">Gallerie</a>
                    <a className="nav-link" href="/impressum">Impressum</a>
                </div>
            </div>
            <div className="navbar-brand">
                <img src="logo192.png" alt="logo" />
                <p><a href="tel:0176 12345678">+49 176 12345678</a></p>
            </div>
         </div>
        </nav>;
    };
}
 
export default ShortNavbar;