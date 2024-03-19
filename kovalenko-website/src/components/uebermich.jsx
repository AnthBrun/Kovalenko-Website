import React, { Component } from 'react';

class Uebermich extends Component {
    state = {  } 
    render() { 
        return <div className="uebermich">
            <div className="ubermich-header">
                <h2>Über mich</h2>
                <p>Mein Name ist Eduard Kovalenko ich bin ein Fliesenleger und Innenausbauer.</p>
                <p>Ich bin 48 Jahre alt und habe eine Ausbildung als Maler und Lackierer.</p>
                <p>Ich arbeite bereits seit 5 Jahren als selbständiger Fliesenleger.</p>
                </div>
            <div className="portrait">
                <img src="logo192.png" alt="portrait"/>
            </div>
        </div>;
    }
}
 
export default Uebermich;