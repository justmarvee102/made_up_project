import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';

import { images } from '../constants';

function ImageSliders({
  children: slide = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1)),
    [slide.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    {
      title: 'Typography',
      description: [
        'Clean and sleek fonts were chosen to ensure readability and to complement the overall aesthetic of the brand.',
      ],
    },
    {
      title: 'Project Duration',
      description: [
        'This wonderful brainstormed project took me 3 days to complete,📅  I had fun getting resources for the process of creation, from initial to final result. ⤴ ',
      ],
    },

    {
      title: 'Role and Responsibility',
      description: ['Graphic Designer'],
    },
  ];

  const items2 = [
    {
      title: 'Inspiration',
      title2: 'Where Did The Idea Come From 🤫 ',
      description: [
        'The inspiration for SipSational Mocktails came from a fun discovery I made which is: 🤯  Mocktails are essentially cocktails in cans! This playful twist on traditional cocktails sparked my imagination and led me to create a brand that embodies the same sense of fun and creativity.',
      ],
    },
    {
      title: 'Challenges & Solutions',
      description: [
        'Challenge: Balancing modern design elements with a warm and inviting feel.',
        <br />,
        ' Solution: I utilized a combination of elegant fonts, vibrant colors, and soft textures to create a welcoming and memorable brand identity.',
      ],
    },

    {
      title: 'Color Palette',
      description: [
        'To reflect the playful and lively essence of mocktails, I selected a color palette bursting with natural and vibrant tones. These hues are reminiscent of the freshest fruits and the most exotic flavors, creating an inviting and tantalizing visual experience. Think juicy oranges, zesty lemons, refreshing mint greens, and deep berry purples—each color chosen to evoke the sensation of sipping a delightful, handcrafted mocktail.',
      ],
    },
  ];

  const items3 = [
    {
      title: 'Project Scope',
      title2: 'Logo Designs',
      description: [
        'I designed set of new logos that captures the essence of the brand. The logos incorporate elegant elements and a color palette that evokes freshness and fun.',
      ],
    },
    {
      title: 'Project Scope',
      title2: 'Packaging Design & Social Media Graphics',
      description: [
        'I created eye-catching and vibrant packaging for mocktail bottles, designed to pop off the shelves and tempt customers.',
      ],
    },
    {
      title: 'Project Scope',
      title2: 'Marketing Collateral & Mockup Designs',
      description: [
        "I also designed flyers, posters, and banners to attract attention and communicate the brand's fun and refreshing nature whilst adding in lively and realistic mockup designs showcasing the product in various settings, adding a touch of whimsy and professionalism to the brand presentation..",
      ],
    },
  ];

  const items4 = [
    {
      title: 'Conclusion',
      description: [
        'My working on SipSational Mocktails was an exhilarating experience that let me unleash my creative spirit and bring to life an imaginative brand I had envisioned. The result was a vibrant and engaging brand identity that perfectly captures the fun and refreshing spirit of mocktails. The journey from discovering mocktails as cocktails in cans to creating a full-fledged brand was incredibly rewarding and inspiring. Cheers to a project filled with imagination and joy🙂 !',
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 sm:p-12 lg:p-10  min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-4xl w-full rounded overflow-hidden shadow-lg bg-white sm:mt-14 lg:mt-10 mt-20">
          <div className="relative w-full lg:w-3/6 overflow-hidden ">
            <motion.div
              className=" flex transition-transform ease-out duration-500 h-full "
              style={{ transform: `translateX(-${curr * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {slide.map((child, index) => (
                <div key={index} className="w-full flex-shrink-0 ">
                  <div className="w-full h-full flex items-center justify-center ">
                    {child}
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center space-x-1">
                {slide.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all w-2 h-2 rounded-full ${
                      curr === i ? 'bg-black p-1' : 'bg-black bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 p-6 sm:w-2/2">
            <div className="bold-text mb-3">
              Imaginative Delight - Crafting the Brand Identity for SipSational
              Mocktails
            </div>
            <p className="s-text mb-4">
              I embarked on a creative journey as a creative would do, to design
              the visual identity for SipSational Mocktails, an imaginative
              brand I conjured up in my head, I was inspired by the vibrant and
              fun world of mocktails. SipSational Mocktails aims to captivate
              audiences with its colorful and refreshing can cocktail options,
              perfect for any celebration or casual get-together.
            </p>
            <div className="flex flex-col mb-3">
              <span className="font-semibold">Organization Name:</span>
              <span className="s-text">SipSational Mocktails</span>
            </div>
            <div className="font-semibold mb-1">Tools Used:</div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col items-center">
                <img src={images.canva} alt="Canva" className="w-7 h-7 mt-1" />
                <span className="s-text">Canva</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={images.photoshop}
                  alt="Photoshop"
                  className="w-7 h-7 mt-1 rounded"
                />
                <span className="s-text">Photoshop</span>
              </div>
            </div>
            <div className="flex-col flex mb-4">
              <div className="font-semibold">Color Palette:</div>
              <div className="flex-row flex ">
                <img
                  src={images.cocktails}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />
                <div className="colors">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.mockup3}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors2">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.billboard3}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors3">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="font-semibold mb-2">Project Link:</div>
              <a href="blank" className="text-blue-500 underline">
                *Check out a full PDF of the designs*
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-center ">Other Important Info:</h1>
      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: 'lightgreen',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'darkgreen',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item.title}</div>
            {item.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-8 lg:py-10">
        {items2.map((item2, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: 'lightsteelblue',
            }}
            whileTap={{
              scaleX: -1,
              scale: 1.05,
              rotate: 20,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'steelblue',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item2.title}</div>
            {item2.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-8 lg:py-10">
        {items3.map((item3, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text "
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: 'sandybrown',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'saddlebrown',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold text-center">{item3.title}</div>
            <div className="font-semibold mb-2 text-center text-gray-500">
              {item3.title2}
            </div>
            {item3.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-8 lg:py-10">
        {items4.map((item4, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-white w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
              backgroundColor: 'lightgray',
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'slategray',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center">{item4.title}</div>

            {item4.description.map((desc, i) => (
              <h2 key={i} className="h-text text-center">
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ImageSliders;
