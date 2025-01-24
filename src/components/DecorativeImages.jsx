import React from 'react';
import fishImage from '@/assets/images/fish.png';
import orangeImage from '@/assets/images/orange.png';
import tomatoImage from '@/assets/images/tomato.png';
import strawberryImage from '@/assets/images/strawberry.png';
import bottleCapImage from '@/assets/images/bottle cap.png';
import popTabImage from '@/assets/images/pop tab.png';
import romaTomatoImage from '@/assets/images/roma tomato.png';
import forkImage from '@/assets/images/fork.png';
import knifeImage from '@/assets/images/knife.png';

const decorativeImages = [
  {
    src: bottleCapImage,
    alt: "Bottle Cap",
    name: "bottleCap",
    style: {
      position: 'fixed',
      top: '5%',
      left: '5%', 
      width: '8%',
      maxWidth: '128px'
    }
  },
  {
    src: fishImage,
    alt: "Fish",
    name: "fish", 
    style: {
      position: 'fixed',
      top: '15%',
      right: '70%',
      width: '20%',
      maxWidth: '350px',
      zIndex: 2
    }
  },
  {
    src: orangeImage,
    alt: "Orange",
    name: "orange",
    style: {
      position: 'fixed', 
      top: '20%',
      right: '2%',
      width: '12%',
      maxWidth: '215px'
    }
  },
  {
    src: popTabImage,
    alt: "Pop Tab",
    name: "popTab",
    style: {
      position: 'fixed',
      top: '80%',
      right: '25%', 
      width: '5%',
      maxWidth: '80px'
    }
  },
  {
    src: romaTomatoImage,
    alt: "Roma Tomato",
    name: "romaTomato",
    style: {
      position: 'fixed',
      top: '40%',
      left: '7%',
      width: '8%',
      maxWidth: '125px'
    }
  },
  {
    src: tomatoImage, 
    alt: "Tomato",
    name: "tomato",
    style: {
      position: 'fixed',
      top: '65%',
      left: '2%',  
      width: '12%',
      maxWidth: '250px'
    }
  },
  {
    src: strawberryImage,
    alt: "Strawberry",
    name: "strawberry",
    style: {
      position: 'fixed',
      top: '80%',
      right: '7%',
      width: '7%',
      maxWidth: '96px' 
    }
  },
  {
    src: forkImage,
    alt: "Fork",  
    name: "fork",
    style: { 
      position: 'fixed',
      top: '50%',
      left: '18.5%',
      width: '25%',
      maxWidth: '85px',
      transform: 'translateY(-50%)',
      zIndex: 1
    }
  },
  {  
    src: knifeImage,
    alt: "Knife",
    name: "knife",
    style: {
      position: 'fixed', 
      top: '50%',
      right: '18.5%',  
      width: '25%',
      maxWidth: '85px',
      transform: 'translateY(-50%)'
    }
  }
];

const DecorativeImages = ({ visibleImages = [] }) => {
  return (
    <>
      {decorativeImages.map((image, index) => (
        <img
          key={index}  
          src={image.src}
          alt={image.alt}
          className={`pointer-events-none transition-transform duration-300 hover:rotate-6 ${
            visibleImages.includes(image.name) ? 'block' : 'hidden'  
          }`}
          style={{
            ...image.style,
            objectFit: 'contain'
          }}
        />
      ))}
    </>
  );
};

export default DecorativeImages;