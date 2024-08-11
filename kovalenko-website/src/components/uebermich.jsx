import React, { Component } from 'react';

class Uebermich extends Component {
    state = {  }
    render() {
        return <div id="#uebermich" className="uebermich">
            <div className="ubermich-header">
                <h2>Über mich</h2>
                <p>Mein Name ist Sacha Haase, ich bin ein Garten- und Landschaftsbauer.</p>
                <p>Ich habe eine Ausbildung als Straßenbauer abgeschlossen.</p>
                <p>Ich arbeite bereits seit 6 Monaten selbstständig.</p>
                </div>
            <div className="portrait">
                <img src="logo192.png" alt="portrait"/>
            </div>
        </div>;
    }
}

export default Uebermich;
