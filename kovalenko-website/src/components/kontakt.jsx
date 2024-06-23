import React, { Component } from 'react';

class Kontakt extends Component {
    state = {  } 
    render() { 
        return <div className="kontakt-container" id="#kontakt">
            <h2>Kontakt</h2>
            <p>Telefon <a href="tel:015906226250">0159 06226250</a></p>
            <p>Email: <a href="mailto:haase.sascha89@gmail.com">haase.sascha89@gmail.com</a></p>
        </div>;
    }
}
 
export default Kontakt;