import React from 'react';
import { useMediaQuery } from 'react-responsive';
import fishImage from '@/assets/images/fish.webp';
import orangeImage from '@/assets/images/orange.webp';
import tomatoImage from '@/assets/images/tomato.webp';
import strawberryImage from '@/assets/images/strawberry.webp';
import bottleCapImage from '@/assets/images/bottle cap.webp';
import popTabImage from '@/assets/images/pop tab.webp';
import romaTomatoImage from '@/assets/images/roma tomato.webp';
import forkImage from '@/assets/images/fork.webp';
import knifeImage from '@/assets/images/knife.webp';

const decorativeImages = [
  {
    src: bottleCapImage,
    alt: "Bottle Cap",
    name: "bottleCap",
    style: {
      width: '110px',
      left: '50px',
      top: '20px'
    }
  },
  {
    src: fishImage,
    alt: "Fish",
    name: "fish",
    style: {
      width: '355px',
      left: '115px',
      top: '90px',
      zIndex: 2
    }
  },
  {
    src: orangeImage,
    alt: "Orange",
    name: "orange",
    style: {
      width: '200px',
      right: '25px',
      top: '150px'
    }
  },
  {
    src: popTabImage,
    alt: "Pop Tab",
    name: "popTab",
    style: {
      width: '65px',
      right: '365px',
      bottom: '65px'
    }
  },
  {
    src: romaTomatoImage,
    alt: "Roma Tomato",
    name: "romaTomato",
    style: {
      width: '170px',
      left: '70px',
      bottom: '320px'
    }
  },
  {
    src: tomatoImage,
    alt: "Tomato",
    name: "tomato",
    style: {
      width: '220px',
      left: '35px',
      bottom: '45px'
    }
  },
  {
    src: strawberryImage,
    alt: "Strawberry",
    name: "strawberry",
    style: {
      width: '120px',
      right: '100px',
      bottom: '1px'
    }
  },
  {
    src: forkImage,
    alt: "Fork",
    name: "fork",
    style: {
      width: '90px',
      left: '269px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1
    }
  },
  {
    src: knifeImage,
    alt: "Knife",
    name: "knife",
    style: {
      width: '90px',
      right: '260px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }
];

const DecorativeImages = ({ visibleImages = [] }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) return null;

  return (
    <div 
      className="absolute inset-0"
      style={{
        width: '1500px',
        height: '800px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'fixed'
      }}
    >
      {decorativeImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute pointer-events-none transition-transform duration-300 hover:rotate-6 ${
            visibleImages.includes(image.name) ? 'block' : 'hidden'
          }`}
          style={{
            ...image.style,
            objectFit: 'contain',
            position: 'absolute'
          }}
        />
      ))}
    </div>
  );
};

export default DecorativeImages;