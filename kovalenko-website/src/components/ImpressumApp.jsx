import React, { Component } from 'react';
import Navbar from './shortNavbar';
import Kontakt from './kontakt';
import Footer from './footer';
import Impressum from './impressum';

class GalleryApp extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <Impressum/>
            <Kontakt/>
            <Footer/>
            </React.Fragment>
        ;
    }
}

 
export default GalleryApp;