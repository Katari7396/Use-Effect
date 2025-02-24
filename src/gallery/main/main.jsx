import React, { useState } from 'react'
import './main.css'

function Main() {
    const images = ['1.jpg', '2.jpg','3.jpg', '4.jpg', '5.jpg', '6.jpg'];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex)=> (prevIndex+1) % images.length);
    }

    const prevImage = () => {
        setCurrentIndex((prevImage)=> (prevImage-1 + images.length) % images.length)
    }

  return (
    <div className='container'>
        <div className='image-display'>
            <img src={images[currentIndex]} alt="Gallery" />
        </div>
        <div className='controls'>
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
        </div>
      
    </div>
  )
}

export default Main
