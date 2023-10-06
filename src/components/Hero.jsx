import React from 'react'
import HeroImg from '../assets/images/profile.png'
import { motion } from "framer-motion"

import Banner from './Banner';

const Hero = () => {

  const description = [
    "Hi, i'm",
    "Aliyan Baig",
    "Digital Marketing Expert",
    "Shot what able cold new the see hold. Friendly as an betrayed formerly he. Morning because as to society behaved moments."
  ]

  const titulo = "ALIYAN BAIG"
  

  const sentence = {
    hidden: {
      opacity: 1,

    },
    visible: {
      
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <>
      <div className='flex flex-row justify-center items-center bg-gray-100 sm:h-screen sm:flex-col sm:pt-10' id="home">
        <div className=''>
          <div className='relative left-36 xs:left-0 sm:ml-6 lg:mt-4 2xl:left-24 md:left-0 '>
          <p className='font-bold text-orange-500 text-lg'>{description[0]}</p>
          <motion.h1
          className="font-bold text-blue-950 text-6xl mb-4 sm:text-4xl"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {titulo.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })
              }

            </motion.h1>
          <h2 className='text-blue-950 font-bold text-lg mb-2'>{description[2]}</h2>
          <p className='w-[60%] inline-block text-blue-950'> {description[3]} </p>
          </div>
          <div className='flex my-4 ml-36 lg:pb-2 sm:my-0 sm:ml-6 sm:justify-center sm:mt-4'>
      <motion.button className='border border-solid bg-orange-500 rounded-3xl py-2 px-4 mr-1 text-white font-small sm:mb-4' whileTap={{ scale: 0.9 }}>Download CV</motion.button>
      <motion.button className='border border-solid border-orange-500 bg-white rounded-3xl py-2 px-4 mr-1 text-orange-500 font-small sm:mb-4 ' whileTap={{ scale: 0.9 }}>Contact</motion.button>
    </div>
        </div>
        <div className=''>
          <img src={HeroImg} alt='' className='relative right-36 sm:right-0 sm:top-0 sm:pl-6 lg:right-20 lg:top-6 2xl:right-0' />
        </div>
      </div>
      <div className='sm:relative sm:bottom-16'>
      <Banner/>
      </div>

    </>
  )
}

export default Hero


