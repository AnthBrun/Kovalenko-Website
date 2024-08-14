import React, { Component } from 'react';

class Uebermich extends Component {
    state = {  }
    render() {
        return <div id="#uebermich" className="uebermich">
            <div className="uebermich-header">
                <h2>Über mich</h2>
                <p>Mein Name ist Sacha Haase, ich bin ein Garten- und Landschaftsbauer.</p>
                <p>Ich habe eine Ausbildung als Straßenbauer abgeschlossen.</p>
                <p>Ich arbeite bereits seit 6 Monaten selbstständig.</p>
                </div>
            <div className="uebermich_image">
                <img id="uebermich_logo" src="logo_big.jpg" alt="logo"/>
            </div>
        </div>;
    }
}

export default Uebermich;
