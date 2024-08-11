import React, { Component } from 'react';

class Leistungen extends Component {
    state = {  }
    render() {
        return <div className="leistungen">
                <div className="big">
                    <img className="big" src="Einfahrt.jpeg" alt="logo" />
                </div>
                <div className="leistungen-header">
                    <p style={{textDecoration: "underline"}}>Individueller Gartenservice:</p>
                    <p>- Neu- und Umgestaltung</p>
                    <p>- Pflasterarbeiten</p>
                    <p>- Terassenbau</p>
                    <p>- Zaunarbeiten</p>
                    <p>- Gehwegreinigung</p>
                    <p>- Winterdienst</p>
                </div>
                <br />
                <div className="little">
                    <img src="Rasengittersteine.jpeg" alt="logo"/>
                </div>
            </div>;
    }
}

export default Leistungen;
