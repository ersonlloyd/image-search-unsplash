import React from "react" 
import ImageCard from "app/image/ImageCard" 

import "app/image/ImageList.scss" 

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} /> 
  }) 

  return <div className="image-list">{images}</div> 
} 

export default ImageList 
