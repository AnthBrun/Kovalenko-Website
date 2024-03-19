import React, { Component } from 'react';

class Kontakt extends Component {
    state = {  } 
    render() { 
        return <div className="kontakt-container" id="#kontakt">
            <h2>Kontakt</h2>
            <p>Telefon: <a href="tel:0176 12345678">0176 12345678</a></p>
            <p>Email: <a href="mailto:edd-k@hotmail.de">edd-k@hotmail.de</a></p>
        </div>;
    }
}
 
export default Kontakt;