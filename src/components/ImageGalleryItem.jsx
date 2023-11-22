import React, { Component } from "react";


class ImageGalleryItem extends Component {
    render() {
      return (
        <ul>
          {this.props.images.map((image) => (
            <li key={image.id} onClick={() => this.props.onClick(image.largeImageURL)}>
              <img src={image.webformatURL} alt={image.tags} />
            </li>
          ))}
        </ul>
      );
    }
  }
  
  export default ImageGalleryItem;
