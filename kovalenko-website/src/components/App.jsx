import React, { Component } from 'react';
import Navbar from './navbar';
import Leistungen from './leistungen';
import Kontakt from './kontakt';
import Footer from './footer';
import Uebermich from './uebermich';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                <Navbar/>
                <div id="#leistungen" className="leistungen-container">
                    <Leistungen/>
                    <Leistungen/>
                </div>
                <Uebermich/>
                <Kontakt/>
                <Footer/>
            </React.Fragment>;
    }
}

 
export default App;