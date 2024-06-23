import React, { Component } from 'react';

const importImages = (requireContext) => {
    return requireContext.keys().map(requireContext);
}

const images = importImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Gallery extends Component {
    state = {  } 
    render() { 
        return <div className="gallery-container">
                
            </div>;
    }
}
 
export default Gallery;