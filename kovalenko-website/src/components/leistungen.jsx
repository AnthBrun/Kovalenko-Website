import React, { Component } from 'react';

class Leistungen extends Component {
    state = {  } 
    render() { 
        return <div className="leistungen">
            <img className="big" src="logo512.png" alt="logo"/>
            <p>Ich lege Fliesen.</p>
            <p>Ich mache Innenausbau.</p>
            <p>Ich verbaue neue Duschen.</p>
            <br />
            <img className="little" src="logo192.png" alt="logo"/>
            </div>;
    }
}
 
export default Leistungen;