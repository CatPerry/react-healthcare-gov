import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
  'http://localhost:3000/american-best-friends-blond-hair-1574650.jpg',
  'http://localhost:3000/active-bikes-cyclist-264073.jpg',
  'http://localhost:3000/action-activity-adults-1246953.jpg',
  'http://localhost:3000/abdomen-active-activity-396133.jpg'
];

const zoomInProperties = {
  duration: 10000,
  transitionDuration: 2500,
  infinite: true,
  indicators: true,
  scale: 1.4,
  arrows: false
}

export const Slideshow = () => {
  return (
    <Zoom {...zoomInProperties}>
      {
        images.map((each, index) => <img key={index} style={{ width: "100%", height: "100%" }} src={each} className="main-img" />)
      }
    </Zoom>
  )
}
