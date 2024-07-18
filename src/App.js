import React from 'react';
import { Navbar } from './components';
import ImageSliders from './components/ImageSliders';
import { images } from './constants';
import './App.scss';

const slide = [
  images.billboard1,
  images.billboard4,
  images.flyer1,

  images.cock,

  images.cocktails,

  images.blue1,
  images.mocktail,
  images.mocktails,
  images.mockup,
  images.mockup1,
  images.mockup3,
  images.mockup4,
  images.mockup5,
  images.poster1,
  images.poster2,

  images.april,
  images.may,
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ImageSliders autoSlide autoSlideInterval={5000}>
        {slide.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </ImageSliders>
    </div>
  );
}
