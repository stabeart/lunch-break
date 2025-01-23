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
      top: '5vh',
      left: '5vw',
      width: 'clamp(48px, 8vw, 128px)'
    }
  },
  {
    src: fishImage,
    alt: "Fish",
    name: "fish",
    style: {
      top: '15vh',
      right: '70vw',
      width: 'clamp(30px, 80vw, 350px)',
      zIndex: 2
    }
  },
  {
    src: orangeImage,
    alt: "Orange",
    name: "orange",
    style: {
      top: '20vh',
      right: '2vw',
      width: 'clamp(48px, 20vw, 215px)'
    }
  },
  {
    src: popTabImage,
    alt: "Pop Tab",
    name: "popTab",
    style: {
      top: '80vh',
      right: '25vw',
      width: 'clamp(36px, 5vw, 80px)'
    }
  },
  {
    src: romaTomatoImage,
    alt: "Roma Tomato",
    name: "romaTomato",
    style: {
      top: '40vh',
      left: '7vw',
      width: 'clamp(48px, 15vw, 125px)'
    }
  },
  {
    src: tomatoImage,
    alt: "Tomato",
    name: "tomato",
    style: {
      top: '65vh',
      left: '2vw',
      width: 'clamp(48px, 20vw, 250px)'
    }
  },
  {
    src: strawberryImage,
    alt: "Strawberry",
    name: "strawberry",
    style: {
      top: '80vh',
      right: '7vw',
      width: 'clamp(48px, 7vw, 96px)'
    }
  },
  {
    src: forkImage,
    alt: "Fork",
    name: "fork",
    style: {
      top: '50%',
      left: 'calc(33% - 200px)',
      width: '600px',
      height: '600px',
      transform: 'translate(-50%, -50%)',
      zIndex: 1
    }
  },
  {
    src: knifeImage,
    alt: "Knife", 
    name: "knife",
    style: {
      top: '50%',
      right: 'calc(33% - 200px)',
      width: '600px',
      height: '600px',
      transform: 'translate(50%, -50%)'
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
          className={`fixed pointer-events-none transition-transform duration-300 hover:rotate-6 ${
            visibleImages.includes(image.name) ? 'block' : 'hidden'
          }`}
          style={{
            ...image.style,
            position: 'fixed',
            objectFit: 'contain'
          }}
        />
      ))}
    </>
  );
};

export default DecorativeImages;