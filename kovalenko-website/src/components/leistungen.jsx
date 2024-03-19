import React, { Component } from 'react';

class Leistungen extends Component {
    state = {  } 
    render() { 
        return <div className="leistungen">
                <div className="big">
                    <img className="big" src="logo512.png" alt="logo" />
                </div>
                <div className="leistungen-header">
                    <p>Ich lege Fliesen.</p>
                    <p>Ich mache Innenausbau.</p>
                    <p>Ich verbaue neue Duschen.</p>
                    <p>Ich verlege Laminat.</p>
                </div>
                <br />
                <div className="little">
                    <img src="logo192.png" alt="logo"/>
                </div>
            </div>;
    }
}
 
export default Leistungen;