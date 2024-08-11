import React, { Component } from 'react';

const importImages = (requireContext) => {
    return requireContext.keys().map(requireContext);
}

const images = importImages(require.context('../images_gallery', false, /\.(png|jpe?g)$/));

class Gallery extends Component {
    state = {  }
    render() {
        return <div className="gallery-container">
                {images.map((image, index) => (
                    <img key={index} className='gallery-images' src={image} alt={`${index}`} />
                ))}
            </div>
    }
}

export default Gallery;
