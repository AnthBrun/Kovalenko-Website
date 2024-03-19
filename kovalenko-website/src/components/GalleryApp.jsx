import React, { Component } from 'react';
import Navbar from './shortNavbar';
import Kontakt from './kontakt';
import Footer from './footer';
import Gallery from './gallery';

class GalleryApp extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                <Navbar/>
                <Gallery/>
                <Kontakt/>
                <Footer/>
            </React.Fragment>;
    }
}

 
export default GalleryApp;